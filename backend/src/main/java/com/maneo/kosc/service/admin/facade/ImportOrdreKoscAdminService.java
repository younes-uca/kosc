package com.maneo.kosc.service.admin.facade;

import com.maneo.kosc.bean.OrdreKosc;

import java.util.List;

public interface ImportOrdreKoscAdminService {
    List<OrdreKosc> importAll(List<OrdreKosc> ordreKoscs);
}
