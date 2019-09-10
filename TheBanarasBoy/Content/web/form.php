<?php session_start();
$EMAIL_ID='info@saindtservices.com';/////////////////Email Input whois Recieved email ID

if($_POST['Submit2']=='Submit'){ 
			$subject = 'Contact query  from Your Website'; 
			$msg = '<div style="font:Arial, Helvetica, sans-serif;color:#000000;text-decoration:none;font-weight:normal;">Hi,<br>
			We have just received a new application.<br><br>
			Name : '.$_POST['name'].'<br><br>
			Address : '.$_POST['address'].'<br><br>
			Phone : '.$_POST['mobile'].'<br><br>
			E-mail : '.$_POST['email'].'<br><br> 
			Message : '.stripslashes($_POST['why']).'<br><br> 
			</div>';
			$headers  = 'MIME-Version: 1.0' . "\r\n";
			$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
			$headers .= 'From: '.$_POST['name'].'<'.$_POST['email'].'>'."\r\n";
			@mail($EMAIL_ID,$subject,$msg,$headers);
			$_SESSION['message']='<font>Thanks for contacting.<br><br>Your request has been sent successfully.</font>';
			header("location:form.php");
			exit();
		}
?> 

<style type="text/css">

body{ margin:0; padding:0;}
</style>

<table width="100%" border="0" cellpadding="0" style="font:13px verdana,arial,helvetica,sans-serif;">  
	<? if($_SESSION['message']) { ?>
	
	<tr>
		<td colspan="3" align="left" valign="top" style="font:bold 16px/30px Arial, Helvetica, sans-serif; text-decoration:underline; color:#006600"><?php echo $_SESSION['message']; $_SESSION['message']='';?></td>
	</tr>
	<? } else {?>
	<script src="form_validate.js" type="text/javascript"></script>   
	<form id="feedbackFrm" name="Feedback" method="post" action="" style="margin:0; padding:0;">   
	
	<tr>
	  <td height="28" colspan="3" align="left" valign="top" style="color:#000; "><strong>Name</strong></td>
	  </tr>
	<tr>
		<td height="51" colspan="3" align="left" valign="top" style="color:#000; "><input name="name" type="text" id="name" style="width:100%; height:40px; border-radius:3px" gtbfieldid="1"></td>
  </tr>
	
	<tr>
	  <td colspan="3" align="left" valign="top" style="color:#000; "><strong>Mobile</strong></td>
	  </tr>
	<tr> 
		<td colspan="3" align="left" valign="top" style="color:#000; "><input name="mobile" type="text" id="mobile" style="width:100%; height:40px; border-radius:3px" gtbfieldid="2"></td>
	  </tr>
	
	<tr>
	  <td height="22" colspan="3" align="left" valign="top" style="color:#000; "><strong>Address</strong></td>
	  </tr>
	<tr> 
		<td height="50" colspan="3" align="left" valign="top" style="color:#000; "><input name="address" type="text" id="address" style="width:100%; height:40px; border-radius:3px" gtbfieldid="3"></td>
	  </tr>
	<tr>
	  <td height="26" colspan="3" align="left" valign="top" style="color:#000; "><strong>Email</strong></td>
	  </tr>
	<tr> 
		<td height="45" colspan="3" align="left" valign="top" style="color:#000; "><input name="email" type="text" id="email" style="width:100%; height:40px; border-radius:3px" gtbfieldid="4"></td>
    </tr>
	
	<tr>
	  <td colspan="3" align="left" valign="top" style="color:#000; "><span style="color:#000; "><strong>Query</strong></span></td>
	  </tr>
	<tr> 
		<td colspan="3" align="left" valign="top" style="color:#000; "><textarea name="why" rows="3" id="why"  style="width:100%; height:100px; resize:none;"></textarea>	</td>
	  </tr> 
	<tr> 
		<td width="40%"></td>
	  <td width="100%" colspan="2"><input name="Submit2" type="submit" id="Submit2" value="Submit" />		</td>
	</tr> 
	</form>
	<script language="JavaScript" type="text/javascript">
		//You should create the validator only after the definition of the HTML form
			var frmvalidator  = new Validator("Feedback"); 
			frmvalidator.EnableMsgsTogether(); 
			
			frmvalidator.addValidation("name","req","Please enter your name"); 
			frmvalidator.addValidation("name","alpha_s"); 
			
			frmvalidator.addValidation("address","req","Please enter your address");  
			
			frmvalidator.addValidation("mobile","req","Please enter your Mobile Number");
			frmvalidator.addValidation("mobile","numeric","Please enter Numeric Mobile Number Value");  
			frmvalidator.addValidation("email","req","Please enter your Email");
			frmvalidator.addValidation("email","email","Enter a valid Email address"); 
			
			
			frmvalidator.addValidation("why","req","Please enter your message");  
		</script>
	<? } ?>
</table>
