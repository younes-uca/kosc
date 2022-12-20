package com.maneo.kosc.service.admin.impl;
import com.google.api.client.json.JsonFactory;
import com.google.api.client.googleapis.auth.oauth2.GoogleCredential;
import com.google.api.client.http.HttpTransport;
import com.google.api.client.http.javanet.NetHttpTransport;
import com.google.api.client.json.JsonGenerator;
import com.google.api.client.json.JsonParser;
import com.google.api.client.json.jackson2.JacksonFactory;
import com.google.api.client.util.Value;
import com.google.api.services.drive.Drive;
import com.google.api.services.drive.DriveScopes;
import com.google.api.services.drive.model.File;
import com.maneo.kosc.service.admin.facade.GoogleDriveAdminService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import java.io.*;
import java.net.URL;
import java.nio.charset.Charset;
import java.nio.file.Paths;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;

@Service

public class GoogleDriveAdminServiceImpl implements GoogleDriveAdminService {
    private static final Logger logger = LoggerFactory.getLogger(GoogleDriveAdminServiceImpl.class);
    /*
    google.service_account_email=kosc-628@kosc-371810.iam.gserviceaccount.com
google.application_name=kosc
fgoogle.older_id=1Z24G7Ru5sZHg0IS6ZFzZD9KyGKGgC45V
google.service_account_key=kosc-371810-ba2d26e4b418.p12
     */
//    @Value("${google.service_account_email}")
    private String serviceAccountEmail = "kosc-628@kosc-371810.iam.gserviceaccount.com";

//    @Value("${google.application_name}")
    private String applicationName = "kosc";

//    @Value("${google.folder_id}")
    private String folderId = "1Z24G7Ru5sZHg0IS6ZFzZD9KyGKGgC45V";

//    @Value("${google.service_account_key}")
    private String serviceAccountKey ="kosc-371810-ba2d26e4b418.p12";

    public Drive getDriveService(){
        Drive service = null;
        try {
            URL resource = GoogleDriveAdminServiceImpl.class.getResource("/"+this.serviceAccountKey);
            java.io.File key= Paths.get(resource.toURI()).toFile();
            HttpTransport httpTransport = new NetHttpTransport();
            JacksonFactory jsonFactory = new JacksonFactory();

            @Deprecated
            GoogleCredential credential =  new GoogleCredential.Builder().setTransport(httpTransport)
                    .setJsonFactory(jsonFactory).setServiceAccountId(serviceAccountEmail)
                    .setServiceAccountScopes(Collections.singleton(DriveScopes.DRIVE))
                    .setServiceAccountPrivateKeyFromP12File(key).build();
            service = new Drive.Builder(httpTransport,jsonFactory,credential).setApplicationName(applicationName)
                    .setHttpRequestInitializer(credential).build();

        }catch (Exception e){
            System.out.println("e = " + e);
        }
        return service;
    }

    @Override
    public File upLoadFile(String fileName, String filePath, String mimeType) {
        File file = new File();
        try {
            java.io.File fileUpLoad = new java.io.File(filePath);
            com.google.api.services.drive.model.File fileMetaData = new com.google.api.services.drive.model.File();
            fileMetaData.setMimeType(mimeType);
            fileMetaData.setName(fileName);
            fileMetaData.setParents(Collections.singletonList(folderId));
            com.google.api.client.http.FileContent fileContent = new com.google.api.client.http.FileContent(mimeType,fileUpLoad);
            file = getDriveService().files().create(fileMetaData, fileContent)
                    .setFields("id, webContentLink, webViewLink").execute();

        }catch (Exception e){
            System.out.println("e = " + e);
        }
        return file;
    }
}
