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


}
