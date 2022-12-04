package com.maneo.kosc.service.admin.facade;

import com.maneo.kosc.bean.kosc.OrdreKosc;

import java.util.List;

public interface ImportOrdreKoscAdminService {
    List<OrdreKosc> importAll(List<OrdreKosc> ordreKoscs);

    List<OrdreKosc> importerDataBase(List<OrdreKosc> ordreKoscs);
}
