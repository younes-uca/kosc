package com.maneo.kosc.service.admin.facade.kosc;

import com.maneo.kosc.bean.kosc.OrdreKosc;

import java.util.List;

public interface OrdreKoscImportAdminService {
    List<OrdreKosc> importAll(List<OrdreKosc> ordreKoscs);

    List<OrdreKosc> importerDataBase(List<OrdreKosc> ordreKoscs);
}
