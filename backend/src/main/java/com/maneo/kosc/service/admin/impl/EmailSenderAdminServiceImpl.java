package com.maneo.kosc.service.admin.impl;

import com.maneo.kosc.bean.template.EmailDetails;
import com.maneo.kosc.service.admin.facade.EmailSenderAdminService;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

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
}
