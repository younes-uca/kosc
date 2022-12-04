package com.maneo.kosc.service.admin.facade;

import com.maneo.kosc.bean.template.EmailDetails;

public interface EmailSenderAdminService {
    void sendEmail(EmailDetails emailDetails);
}
