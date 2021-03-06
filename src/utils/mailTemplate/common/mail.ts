const template = (title: string, content: string) =>
  `
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="ko">
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <title>Panopticon</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <style type="text/css">
      a[x-apple-data-detectors] {
        color: inherit !important;
      }
    </style>
  </head>
  <body style="margin: 0; padding: 0">
    <table
      role="presentation"
      border="0"
      cellpadding="0"
      cellspacing="0"
      width="100%"
    >
      <tr>
        <td style="padding: 20px 0 30px 0">
          <table
            align="center"
            border="0"
            cellpadding="0"
            cellspacing="0"
            width="600"
            style="border-collapse: collapse; border: 1px solid #cccccc"
          >
            <tr>
              <td bgcolor="#ffffff" style="padding: 40px 30px 40px 30px">
                <table
                  border="0"
                  cellpadding="0"
                  cellspacing="0"
                  width="100%"
                  style="border-collapse: collapse"
                >
                  <tr>
                    <td style="color: #153643; font-family: Arial, sans-serif">
                      <h1 style="font-size: 24px; margin: 0">${title}</h1>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 20px 0 0 0">
                      <h3 style="font-size: 16px; margin: 0">
                        프론트엔드 에러 통합관리 솔루션 PANOPTICON 입니다.
                      </h3>
                    </td>
                  </tr>
                  ${content}
                </table>
              </td>
            </tr>
            <tr>
              <td align="right" style="padding: 20px 30px">
                Thank You. Team Panopticon
              </td>
            </tr>
            <tr>
              <td
                bgcolor="#ffffff"
                style="
                  padding: 30px 30px;
                  border-collapse: collapse;
                  border-top: 1px solid #cfcfcf;
                "
              >
                <table
                  border="0"
                  cellpadding="0"
                  cellspacing="0"
                  width="100%"
                  style="border-collapse: collapse"
                >
                  <tr>
                    <td
                      style="
                        color: #ffffff;
                        font-family: Arial, sans-serif;
                        font-size: 14px;
                      "
                    >
                      <p style="margin: 0">
                        &reg; Someone, somewhere 2025<br />
                        <a href="#" style="color: #ffffff">Unsubscribe</a> to
                        this newsletter instantly
                      </p>
                    </td>
                    <td align="right">
                      <table
                        border="0"
                        cellpadding="0"
                        cellspacing="0"
                        style="border-collapse: collapse"
                      >
                        <tr>
                          <td>
                            <a href="http://panopticon.gq/">
                              <img
                                src="https://firebasestorage.googleapis.com/v0/b/panopticon-7444c.appspot.com/o/3333.png?alt=media&token=3f3a5096-bcaf-415a-8d3f-db021ca65608"
                                alt="Panopticon."
                                width="150"
                                height="38"
                                style="display: block"
                                border="0"
                              />
                            </a>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`.trim();

export default template;
