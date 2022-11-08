package com.maneo.kosc.service.admin.facade;

import com.maneo.kosc.bean.EmailDetails;

public interface EmailSenderAdminService {
    void sendEmail(EmailDetails emailDetails);
}
