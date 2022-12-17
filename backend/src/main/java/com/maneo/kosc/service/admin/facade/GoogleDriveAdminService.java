package com.maneo.kosc.service.admin.facade;

import com.google.api.services.drive.model.File;

public interface GoogleDriveAdminService {

    public File upLoadFile(String fileName,String filePath, String mimeType);
}
