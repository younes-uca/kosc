package com.maneo.kosc.service.admin.impl;

import com.maneo.kosc.bean.template.EmailDetails;
import com.maneo.kosc.service.admin.facade.EmailSenderAdminService;
import org.springframework.core.io.FileSystemResource;
import org.springframework.mail.MailParseException;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;


@Service
public class EmailSenderAdminServiceImpl implements EmailSenderAdminService {

    private JavaMailSender mailSender;

    public EmailSenderAdminServiceImpl(JavaMailSender mailSender) {
        this.mailSender = mailSender;
    }

    @Override
    public void sendEmail(EmailDetails emailDetails) {
        SimpleMailMessage simpleMailMessage = new SimpleMailMessage();
        simpleMailMessage.setFrom(emailDetails.getFrom());
        simpleMailMessage.setTo(emailDetails.getTo());
        simpleMailMessage.setSubject(emailDetails.getObjet());
        simpleMailMessage.setText(emailDetails.getCorps());
        this.mailSender.send(simpleMailMessage);

    }
    @Override

    public void sendMailWithAttachment(EmailDetails emailDetails) {

        MimeMessage message = mailSender.createMimeMessage();

        try {
            MimeMessageHelper helper = new MimeMessageHelper(message, true);

            helper.setFrom(emailDetails.getFrom());
            helper.setTo(emailDetails.getTo());
            helper.setSubject(emailDetails.getObjet());
            helper.setText(emailDetails.getCorps());

            FileSystemResource file = new FileSystemResource(emailDetails.getAttachment());
            helper.addAttachment(file.getFilename(), file);

        } catch (MessagingException e) {
            throw new MailParseException(e);
        }
        mailSender.send(message);
    }

/*    public DriveFiles getDriveFiles(String accessToken) {
        String requestUri = "https://www.googleapis.com/drive/v3/files";
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_FORM_URLENCODED);
        headers.setContentType(MediaType.APPLICATION_JSON);
        headers.add("Authorization", "Bearer " + accessToken);

        HttpEntity request = new HttpEntity(headers);
        MappingJackson2HttpMessageConverter mappingJackson2HttpMessageConverter =
                new MappingJackson2HttpMessageConverter();
        restTemplate.getMessageConverters().add(mappingJackson2HttpMessageConverter);
        ResponseEntity<String> response = restTemplate.exchange(requestUri, HttpMethod.GET, request, String.class);

        Gson gson = new Gson();
        DriveFiles driveFiles = gson.fromJson(response.getBody(), DriveFiles.class);

        return driveFiles;
    }*/
}
