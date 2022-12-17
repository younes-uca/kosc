package com.maneo.kosc.service.admin.impl;
import com.google.api.client.json.JsonFactory;
import com.google.api.client.googleapis.auth.oauth2.GoogleCredential;
import com.google.api.client.http.HttpTransport;
import com.google.api.client.http.javanet.NetHttpTransport;
import com.google.api.client.json.JsonGenerator;
import com.google.api.client.json.JsonParser;
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
import java.util.Collections;

@Service

public class GoogleDriveAdminServiceImpl implements GoogleDriveAdminService {
    private static final Logger logger = LoggerFactory.getLogger(GoogleDriveAdminServiceImpl.class);

    @Value("${service_account_email}")
    private String serviceAccountEmail;

    @Value("${application_name}")
    private String applicationName;

    @Value("${folder_id}")
    private String folderId;

    @Value("${service_account_key}")
    private String serviceAccountKey;


    public Drive getDriveService(){
        Drive service = null;
        try {
            URL resource = GoogleDriveAdminServiceImpl.class.getResource("/"+this.serviceAccountKey);
            java.io.File key= Paths.get(resource.toURI()).toFile();
            HttpTransport httpTransport = new NetHttpTransport();
            JsonFactory jsonFactory = new JsonFactory() {
                @Override
                public JsonParser createJsonParser(InputStream inputStream) throws IOException {
                    return null;
                }

                @Override
                public JsonParser createJsonParser(InputStream inputStream, Charset charset) throws IOException {
                    return null;
                }

                @Override
                public JsonParser createJsonParser(String s) throws IOException {
                    return null;
                }

                @Override
                public JsonParser createJsonParser(Reader reader) throws IOException {
                    return null;
                }

                @Override
                public JsonGenerator createJsonGenerator(OutputStream outputStream, Charset charset) throws IOException {
                    return null;
                }

                @Override
                public JsonGenerator createJsonGenerator(Writer writer) throws IOException {
                    return null;
                }
            };

            @Deprecated
            GoogleCredential credential =  new GoogleCredential.Builder().setTransport(httpTransport)
                    .setJsonFactory(jsonFactory).setServiceAccountId(serviceAccountEmail)
                    .setServiceAccountScopes(Collections.singleton(DriveScopes.DRIVE))
                    .setServiceAccountPrivateKeyFromP12File(key).build();
            service = new Drive.Builder(httpTransport,jsonFactory,credential).setApplicationName(applicationName)
                    .setHttpRequestInitializer(credential).build();

        }catch (Exception e){
            logger.error(e.getMessage());
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
            logger.error(e.getMessage());
        }
        return file;
    }
}
