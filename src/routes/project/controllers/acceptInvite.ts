import Mongoose from 'mongoose';
import { Context, Next } from 'koa';
import CryptoJS from 'crypto-js';
import Invite from '../../../models/Invite';
import Project from '../../../models/Project';
import User, { IUserDocument } from '../../../models/User';

export default async (ctx: Context, next: Next): Promise<void> => {
  const { key } = ctx.query;
  const decodeKey = decodeURIComponent(key);

  const result = await Invite.findOne({ key: decodeKey, expire: { $lte: new Date().getTime() } });
  if (result) {
    const session = await Mongoose.startSession();
    session.startTransaction();
    const bytes = CryptoJS.AES.decrypt(result.key, process.env.INVITE_SECRET_KEY as string);
    const decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
    const project = await Project.findOne({ _id: decryptedData.projectId }, null, { session });
    const user = (await User.findOne({ _id: ctx.state.user._id }, null, {
      session,
    })) as IUserDocument;
    if (!project) {
      await session.abortTransaction();
      session.endSession();
      ctx.throw(404, 'project not found');
    }
    try {
      await project.addUser(ctx.state.user._id);
      user.addProject(project._id);
      await user.save();
      await project.save();
      await session.commitTransaction();
      session.endSession();
      ctx.response.status = 200;
    } catch (e) {
      await session.abortTransaction();
      session.endSession();
      ctx.throw(500);
    }
    /**
     * @todo
     * project에 맞는 issue로 redirect
     */
  } else {
    ctx.throw(401, 'invite code expired');
  }
  await next();
};
