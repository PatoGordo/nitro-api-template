import { $st } from "../../../i18n/$st";

export function resetEmailTemplate(
  resetToken: string,
  resetPasswordURL: string
) {
  return `
<!DOCTYPE html>

<html lang="en" xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:v="urn:schemas-microsoft-com:vml">
<head>
<title></title>
<meta content="text/html; charset=utf-8" http-equiv="Content-Type"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<!--[if mso]><xml><o:OfficeDocumentSettings><o:PixelsPerInch>96</o:PixelsPerInch><o:AllowPNG/></o:OfficeDocumentSettings></xml><![endif]-->
<style>
		* {
			box-sizing: border-box;
		}

		body {
			margin: 0;
			padding: 0;
		}

		a[x-apple-data-detectors] {
			color: inherit !important;
			text-decoration: inherit !important;
		}

		#MessageViewBody a {
			color: inherit;
			text-decoration: none;
		}

		p {
			line-height: inherit
		}

		.desktop_hide,
		.desktop_hide table {
			mso-hide: all;
			display: none;
			max-height: 0px;
			overflow: hidden;
		}

		@media (max-width:520px) {
			.desktop_hide table.icons-inner {
				display: inline-block !important;
			}

			.icons-inner {
				text-align: center;
			}

			.icons-inner td {
				margin: 0 auto;
			}

			.row-content {
				width: 100% !important;
			}

			.mobile_hide {
				display: none;
			}

			.stack .column {
				width: 100%;
				display: block;
			}

			.mobile_hide {
				min-height: 0;
				max-height: 0;
				max-width: 0;
				overflow: hidden;
				font-size: 0px;
			}

			.desktop_hide,
			.desktop_hide table {
				display: table !important;
				max-height: none !important;
			}
		}
	</style>
</head>
<body style="background-color: #FFFFFF; margin: 0; padding: 0; -webkit-text-size-adjust: none; text-size-adjust: none;">
<table border="0" cellpadding="0" cellspacing="0" class="nl-container" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #FFFFFF;" width="100%">
<tbody>
<tr>
<td>
<table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-1" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
<tbody>
<tr>
<td>
<table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 500px;" width="500">
<tbody>
<tr>
<td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-left: 32px; padding-right: 32px; vertical-align: top; padding-top: 32px; padding-bottom: 32px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="100%">
<table border="0" cellpadding="0" cellspacing="0" class="image_block block-1" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
<tr>
<td class="pad" style="width:100%;padding-right:0px;padding-left:0px;">
<div align="left" class="alignment" style="line-height:10px"><img src="${
    process.env.APP_URL
  }/images/Email_signature_1.png" style="display: block; height: auto; border: 0; width: 174px; max-width: 100%;" width="174"/></div>
</td>
</tr>
</table>
<table border="0" cellpadding="0" cellspacing="0" class="heading_block block-3" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
<tr>
<td class="pad" style="width:100%;text-align:center;padding-top:32px;">
<h1 style="margin: 0; color: #6c63ff; font-size: 32px; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; line-height: 120%; text-align: left; direction: ltr; font-weight: 700; letter-spacing: normal; margin-top: 0; margin-bottom: 0;"><span class="tinyMce-placeholder">${$st(
    "email.reset-password.forgot_your_password"
  )}</span></h1>
</td>
</tr>
</table>
<table border="0" cellpadding="0" cellspacing="0" class="paragraph_block block-4" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
<tr>
<td class="pad">
<div style="color:#101112;font-size:16px;font-family:Arial, Helvetica Neue, Helvetica, sans-serif;font-weight:400;line-height:120%;text-align:left;direction:ltr;letter-spacing:0px;mso-line-height-alt:19.2px;">
<p style="margin: 0; margin-bottom: 10px;">&nbsp;</p>
<p style="margin: 0; margin-bottom: 10px;">${$st(
    "email.reset-password.hey_we_received_a_request_to_reset_your_password"
  )}</p>
<p style="margin: 0; margin-bottom: 10px;">${$st(
    "email.reset-password.lets_get_you_a_new_one"
  )}</p>
<p style="margin: 0;">&nbsp;</p>
</div>
</td>
</tr>
</table>
<table border="0" cellpadding="0" cellspacing="0" class="button_block block-5" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
<tr>
<td class="pad" style="text-align:left;">
<div align="left" class="alignment">
<!--[if mso]><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" style="height:42px;width:190px;v-text-anchor:middle;" arcsize="20%" stroke="false" fillcolor="#6c63ff"><w:anchorlock/><v:textbox inset="0px,0px,0px,0px"><center style="color:#ffffff; font-family:Arial, sans-serif; font-size:16px"><![endif]-->
<a href="${
    resetPasswordURL + resetToken
  }" style="text-decoration:none;display:inline-block;color:#ffffff;background-color:#6c63ff;border-radius:8px;width:auto;border-top:0px solid transparent;font-weight:700;border-right:0px solid transparent;border-bottom:0px solid transparent;border-left:0px solid transparent;padding-top:5px;padding-bottom:5px;font-family:Arial, Helvetica Neue, Helvetica, sans-serif;font-size:16px;text-align:center;mso-border-alt:none;word-break:keep-all;"><span style="padding-left:20px;padding-right:20px;font-size:16px;display:inline-block;letter-spacing:normal;"><span dir="ltr" style="word-break: break-word; line-height: 32px;">${$st(
    "email.reset-password.reset_my_password"
  )}</span></span></a>
<!--[if mso]></center></v:textbox></v:roundrect><![endif]-->
</div>
</td>
</tr>
</table>
<table border="0" cellpadding="0" cellspacing="0" class="paragraph_block block-6" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
<tr>
<td class="pad">
<div style="color:#101112;font-size:16px;font-family:Arial, Helvetica Neue, Helvetica, sans-serif;font-weight:400;line-height:120%;text-align:left;direction:ltr;letter-spacing:0px;mso-line-height-alt:19.2px;">
<p style="margin: 0; margin-bottom: 0px;">&nbsp;</p>
<p style="margin: 0; margin-bottom: 0px;"><a href="mailto:support@patogordo.dev?subject=Having%20trouble%20with%20password%20reset" rel="noopener" style="text-decoration: underline; color: #6c63ff;" target="_blank" title="support@patogordo.dev">${$st(
    "email.reset-password.having_trouble"
  )}</a></p>
<p style="margin: 0; margin-bottom: 0px;">&nbsp;</p>
<p style="margin: 0; margin-bottom: 0px;"><strong>${$st(
    "email.reset-password.didnt_request_a_password_reset"
  )}</strong> ${$st("email.reset-password.you_can_ignore_this_message")}</p>
<p style="margin: 0; margin-bottom: 0px;">&nbsp;</p>
<p style="margin: 0;">&nbsp;</p>
</div>
</td>
</tr>
</table>
<table border="0" cellpadding="0" cellspacing="0" class="icons_block block-7" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
<tr>
<td class="pad" style="vertical-align: middle; color: #000000; text-align: center; font-family: inherit; font-size: 14px;">
<table align="center" cellpadding="0" cellspacing="0" class="alignment" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
<tr>
<td style="vertical-align: middle; text-align: center; padding-top: 5px; padding-bottom: 5px; padding-left: 5px; padding-right: 5px;"><a href="https://github.com/patogordo" style="text-decoration: none;" target="_blank"><img align="center" alt="" class="icon" height="32" src="${
    process.env.APP_URL
  }/images/logo-github.svg" style="display: block; height: auto; margin: 0 auto; border: 0;" width="32"/></a></td>
<td style="vertical-align: middle; text-align: center; padding-top: 5px; padding-bottom: 5px; padding-left: 5px; padding-right: 5px;"><a href="https://www.linkedin.com/in/icaro-miguel-0879521bb/" style="text-decoration: none;" target="_blank"><img align="center" alt="" class="icon" height="32" src="${
    process.env.APP_URL
  }/images/logo-linkedin.svg" style="display: block; height: auto; margin: 0 auto; border: 0;" width="32"/></a></td>
<td style="vertical-align: middle; text-align: center; padding-top: 5px; padding-bottom: 5px; padding-left: 5px; padding-right: 5px;"><a href="https://t.me/patogordo" style="text-decoration: none;" target="_blank"><img align="center" alt="" class="icon" height="32" src="${
    process.env.APP_URL
  }/images/send-alt-filled.svg" style="display: block; height: auto; margin: 0 auto; border: 0;" width="32"/></a></td>
<td style="vertical-align: middle; text-align: center; padding-top: 5px; padding-bottom: 5px; padding-left: 5px; padding-right: 5px;"><a href="mailto:support@patogordo.dev" style="text-decoration: none;" target="_self"><img align="center" alt="" class="icon" height="32" src="${
    process.env.APP_URL
  }/images/email.svg" style="display: block; height: auto; margin: 0 auto; border: 0;" width="32"/></a></td>
</tr>
</table>
</td>
</tr>
</table>
</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
<table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-2" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
<tbody>
<tr>
<td>
<table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 500px;" width="500">
<tbody>
<tr>
<td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 5px; padding-bottom: 5px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="100%">
<table border="0" cellpadding="0" cellspacing="0" class="icons_block block-1" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
<tr>
<td class="pad" style="vertical-align: middle; color: #9d9d9d; font-family: inherit; font-size: 15px; padding-bottom: 5px; padding-top: 5px; text-align: center;">
<table cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
<tr>
<td class="alignment" style="vertical-align: middle; text-align: center;">
<!--[if vml]><table align="left" cellpadding="0" cellspacing="0" role="presentation" style="display:inline-block;padding-left:0px;padding-right:0px;mso-table-lspace: 0pt;mso-table-rspace: 0pt;"><![endif]-->
<!--[if !vml]><!-->
<table cellpadding="0" cellspacing="0" class="icons-inner" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; display: inline-block; margin-right: -4px; padding-left: 0px; padding-right: 0px; display: none;">
<!--<![endif]-->
<tr>
<td style="vertical-align: middle; text-align: center; padding-top: 5px; padding-bottom: 5px; padding-left: 5px; padding-right: 6px;"><a href="https://www.designedwithbee.com/?utm_source=editor&utm_medium=bee_pro&utm_campaign=free_footer_link" style="text-decoration: none;" target="_blank"><img align="center" alt="Designed with BEE" class="icon" height="32" src="${
    process.env.APP_URL
  }/images/bee.png" style="display: block; height: auto; margin: 0 auto; border: 0;" width="34"/></a></td>
<td style="font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-size: 15px; color: #9d9d9d; vertical-align: middle; letter-spacing: undefined; text-align: center;"><a href="https://www.designedwithbee.com/?utm_source=editor&utm_medium=bee_pro&utm_campaign=free_footer_link" style="color: #9d9d9d; text-decoration: none;" target="_blank">Designed with BEE</a></td>
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
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table><!-- End -->
</body>
</html>	
`.trim();
}
