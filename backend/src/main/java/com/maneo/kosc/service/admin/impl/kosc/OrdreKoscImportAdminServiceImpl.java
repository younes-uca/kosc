package com.maneo.kosc.service.admin.impl.kosc;

import com.maneo.kosc.bean.kosc.OrdreKosc;
import com.maneo.kosc.bean.referentiel.EtatDemandeKosc;
import com.maneo.kosc.bean.referentiel.Operator;
import com.maneo.kosc.bean.technicien.Departement;
import com.maneo.kosc.bean.technicien.Technicien;
import com.maneo.kosc.dao.technicien.DepartementDao;
import com.maneo.kosc.dao.kosc.OrdreKoscDao;
import com.maneo.kosc.service.admin.facade.kosc.OrdreKoscImportAdminService;
import com.maneo.kosc.service.admin.facade.referentiel.EtatDemandeKoscAdminService;
import com.maneo.kosc.service.admin.facade.referentiel.OperatorAdminService;
import com.maneo.kosc.service.admin.facade.technicien.DepartementAdminService;
import com.maneo.kosc.service.admin.facade.technicien.TechnicienAdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import javax.mail.Multipart;
import java.io.File;
import java.io.IOException;
import java.util.*;

//import static jdk.internal.org.jline.utils.Colors.s;

@Service
public class OrdreKoscImportAdminServiceImpl implements OrdreKoscImportAdminService {

    @Autowired
    private OrdreKoscDao ordreKoscDao;
    @Autowired
    private OperatorAdminService operatorService;
    @Autowired
    private EtatDemandeKoscAdminService etatDemandeKoscService;
    @Autowired
    private DepartementAdminService departementService;
    @Autowired
    private TechnicienAdminService technicienService;
    @Autowired
    private DepartementDao departementDao;


    @Override
    public List<OrdreKosc> importAll(List<OrdreKosc> ordreKoscs) {
        List<OrdreKosc> result = new ArrayList<>();
        List<OrdreKosc> resultKosc = new ArrayList<>();
        List<OrdreKosc> resultFtl = new ArrayList<>();
        List<OrdreKosc> resultErdv = new ArrayList<>();
        for (OrdreKosc ordreKosc : ordreKoscs) {
            if (isFtl(ordreKosc)) {
                resultFtl.add(ordreKosc);
            } else if (isKosc(ordreKosc)) {
                resultKosc.add(ordreKosc);
            } else if (isErdv(ordreKosc)) {
                resultErdv.add(ordreKosc);
            } else {
                result.add(ordreKosc);
            }
        }
        result.addAll(importerERdv(resultErdv));
        result.addAll(importerWorkOrder(resultKosc));
        result.addAll(importerFtel(resultFtl));
        return result;
    }


    private boolean isErdv(OrdreKosc ordreKosc) {
        return ordreKosc.getType() != null && ordreKosc.getType().equals("erdv");
    }

    private boolean isKosc(OrdreKosc ordreKosc) {
        return ordreKosc.getType() != null && ordreKosc.getType().equals("kosc");

    }

    private boolean isFtl(OrdreKosc ordreKosc) {
        return ordreKosc.getType() != null && ordreKosc.getType().equals("ftl");
    }

    @Override
    public List<OrdreKosc> importerDataBase(List<OrdreKosc> ordreKoscs) {
        List<OrdreKosc> list = new ArrayList<>();
        for (OrdreKosc ordreKosc : ordreKoscs) {
            prepareSave(ordreKosc);
            OrdreKosc foundedOrdreKosc = ordreKoscDao.findByReferenceWorkOrderAndEtat(ordreKosc.getReferenceWorkOrder());
                    if (foundedOrdreKosc == null) {
                        // findOrSave operator departement and technicien
                        ordreKosc.setDateEnvoiCri(null);
                        findOrSaveDepartement(ordreKosc);
                        findOrSaveOperator(ordreKosc);
                        findOrSaveTechnicien(ordreKosc);
                        ordreKosc.setEtatDemandeKosc(etatDemandeKoscService.findByCode(ordreKosc.getEtatDemandeKosc().getCode()));
                        if (ordreKosc.getProductLabel() != null && ordreKosc.getProductLabel().toUpperCase().contains("CONFORT")) {
                            ordreKosc.setConfort(true);
                        } else {
                            ordreKosc.setConfort(false);
                        }
                        ordreKosc.setErdv(false);
                        ordreKoscDao.save(ordreKosc);
                    } else {
                        list.add(foundedOrdreKosc);
                    }
        }
        return list;
    }

    private List<OrdreKosc> importerWorkOrder(List<OrdreKosc> ordreKoscs) {
        List<OrdreKosc> list = new ArrayList<>();
        for (OrdreKosc ordreKosc : ordreKoscs) {
            prepareSave(ordreKosc);
            OrdreKosc foundedOrdreKosc = ordreKoscDao.findByReferenceWorkOrderAndEtat(ordreKosc.getReferenceWorkOrder());
//            if (!foundedOrdreKosc.isEmpty()) {}
//                for (OrdreKosc foundedOrdreKoscs : foundedOrdreKosc) {}
                    if (foundedOrdreKosc == null) {
                        // findOrSave operator departement and technicien
                        findOrSaveDepartement(ordreKosc);
                        findOrSaveOperator(ordreKosc);
                        findOrSaveTechnicien(ordreKosc);
                        ordreKosc.setEtatDemandeKosc(etatDemandeKoscService.findByCode(ordreKosc.getEtatDemandeKosc().getCode()));
                        if (ordreKosc.getProductLabel() != null && ordreKosc.getProductLabel().toUpperCase().contains("CONFORT")) {
                            ordreKosc.setConfort(true);
                        } else {
                            ordreKosc.setConfort(false);
                        }
                        ordreKosc.setErdv(false);
                        ordreKoscDao.save(ordreKosc);
                    } else {
                        list.add(foundedOrdreKosc);
                    }
        }
        return list;
    }

    private List<OrdreKosc> importerFtel(List<OrdreKosc> ordreKoscs) {
        List<OrdreKosc> resultat = new ArrayList<>();
        if (ordreKoscs != null) {
            for (OrdreKosc ordreKosc : ordreKoscs) {
                ordreKosc.setReference(ordreKosc.getReferenceCommandePriseInterneOC());
                OrdreKosc myOrdreKosc = ordreKoscDao.findByReference(ordreKosc.getReferenceCommandePriseInterneOC());
                if (myOrdreKosc != null) {
                    findOrSaveDepartement(ordreKosc);
                    findOrSaveTechnicien(ordreKosc);
                    findOrSaveOperator(ordreKosc);
                    EtatDemandeKosc etatDemande = etatDemandeKoscService.findByCode(myOrdreKosc.getEtatDemandeKosc().getCode().toLowerCase());
                    if (etatDemande != null) {
                        myOrdreKosc.setEtatDemandeKosc(etatDemande);
                    }

                    myOrdreKosc.setDepartement(ordreKosc.getDepartement());
                    myOrdreKosc.setTechnicien(ordreKosc.getTechnicien());
                    myOrdreKosc.setOperator(ordreKosc.getOperator());
                    myOrdreKosc.setReferenceCommandePriseInterneOC(ordreKosc.getReferenceCommandePriseInterneOC());
                    myOrdreKosc.setReferencePrise(ordreKosc.getReferencePrise());
                    myOrdreKosc.setReferencePrestationPrise(ordreKosc.getReferencePrestationPrise());
                    myOrdreKosc.setReferencePm(ordreKosc.getReferencePm());
                    myOrdreKosc.setReferencePmTechnique(ordreKosc.getReferencePmTechnique());
                    myOrdreKosc.setLocalisationPm(ordreKosc.getLocalisationPm());
                    myOrdreKosc.setReferencePbo(ordreKosc.getReferencePbo());
                    myOrdreKosc.setLocalisationPbo(ordreKosc.getLocalisationPbo());
                    myOrdreKosc.setCoordonnePboY(ordreKosc.getCoordonnePboY());
                    myOrdreKosc.setHauteurPbo(ordreKosc.getHauteurPbo());
                    myOrdreKosc.setTypePbo(ordreKosc.getTypePbo());
                    myOrdreKosc.setConditionSyndics(ordreKosc.getConditionSyndics());
                    myOrdreKosc.setTypeRacordementPboPto(ordreKosc.getTypeRacordementPboPto());
                    myOrdreKosc.setAutreInfosPboPto(ordreKosc.getAutreInfosPboPto());
                    myOrdreKosc.setCodeAccesImmeuble(ordreKosc.getCodeAccesImmeuble());
                    myOrdreKosc.setContacteImmeuble(ordreKosc.getContacteImmeuble());
                    myOrdreKosc.setPmaAccessible(ordreKosc.getPmaAccessible());
                    myOrdreKosc.setInfoObtentionCle(ordreKosc.getInfoObtentionCle());
                    myOrdreKosc.setLocaleIpm(ordreKosc.getLocaleIpm());////////////////////////
                    myOrdreKosc.setContactsSyndic(ordreKosc.getContactsSyndic());
                    myOrdreKosc.setOc1(ordreKosc.getOc1());
                    myOrdreKosc.setNomModulePm1(ordreKosc.getNomModulePm1());
                    myOrdreKosc.setPositionModulePm1(ordreKosc.getPositionModulePm1());
                    myOrdreKosc.setReferenceCableModulePm1(ordreKosc.getReferenceCableModulePm1());
                    myOrdreKosc.setInformationFibreModulePm1(ordreKosc.getInformationFibreModulePm1());
                    myOrdreKosc.setReferenceCablePbo1(ordreKosc.getReferenceCablePbo1());
                    myOrdreKosc.setInformationTubePbo1(ordreKosc.getInformationTubePbo1());
                    myOrdreKosc.setInformationFibrePbo1(ordreKosc.getInformationFibrePbo1());
                    myOrdreKosc.setConnecteurPriseNumero1(ordreKosc.getConnecteurPriseNumero1());
                    myOrdreKosc.setConnecteurPriseCouleur1(ordreKosc.getConnecteurPriseCouleur1());
                    myOrdreKosc.setOc2(ordreKosc.getOc2());
                    myOrdreKosc.setNomModulePm2(ordreKosc.getNomModulePm2());
                    myOrdreKosc.setPositionModulePm2(ordreKosc.getPositionModulePm2());
                    myOrdreKosc.setReferenceCableModulePm2(ordreKosc.getReferenceCableModulePm2());
                    myOrdreKosc.setInformationFibreModulePm2(ordreKosc.getInformationFibreModulePm2());
                    myOrdreKosc.setReferenceCablePbo2(ordreKosc.getReferenceCablePbo2());
                    myOrdreKosc.setInformationTubePbo2(ordreKosc.getInformationTubePbo2());
                    myOrdreKosc.setInformationFibrePbo2(ordreKosc.getInformationFibrePbo2());
                    myOrdreKosc.setConnecteurPriseNumero2(ordreKosc.getConnecteurPriseNumero2());
                    myOrdreKosc.setConnecteurPriseCouleur2(ordreKosc.getConnecteurPriseCouleur2());
                    myOrdreKosc.setOc3(ordreKosc.getOc3());
                    myOrdreKosc.setNomModulePm3(ordreKosc.getNomModulePm3());
                    myOrdreKosc.setPositionModulePm3(ordreKosc.getPositionModulePm3());
                    myOrdreKosc.setReferenceCableModulePm3(ordreKosc.getReferenceCableModulePm3());
                    myOrdreKosc.setInformationFibreModulePm3(ordreKosc.getInformationFibreModulePm3());
                    myOrdreKosc.setReferenceCablePbo3(ordreKosc.getReferenceCablePbo3());
                    myOrdreKosc.setInformationTubePbo3(ordreKosc.getInformationTubePbo3());
                    myOrdreKosc.setInformationFibrePbo3(ordreKosc.getInformationFibrePbo3());
                    myOrdreKosc.setConnecteurPriseNumero3(ordreKosc.getConnecteurPriseNumero3());
                    myOrdreKosc.setConnecteurPriseCouleur3(ordreKosc.getConnecteurPriseCouleur3());
                    myOrdreKosc.setOc4(ordreKosc.getOc4());
                    myOrdreKosc.setNomModulePm4(ordreKosc.getNomModulePm4());
                    myOrdreKosc.setPositionModulePm4(ordreKosc.getPositionModulePm4());
                    myOrdreKosc.setReferenceCableModulePm4(ordreKosc.getReferenceCableModulePm4());
                    myOrdreKosc.setInformationFibreModulePm4(ordreKosc.getInformationFibreModulePm4());
                    myOrdreKosc.setReferenceCablePbo4(ordreKosc.getReferenceCablePbo4());
                    myOrdreKosc.setInformationTubePbo4(ordreKosc.getInformationTubePbo4());
                    myOrdreKosc.setInformationFibrePbo4(ordreKosc.getInformationFibrePbo4());
                    myOrdreKosc.setConnecteurPriseNumero4(ordreKosc.getConnecteurPriseNumero4());
                    myOrdreKosc.setConnecteurPriseCouleur4(ordreKosc.getConnecteurPriseCouleur4());
                    myOrdreKosc.setReserve1(ordreKosc.getReserve1());
                    myOrdreKosc.setReserve2(ordreKosc.getReserve2());
                    myOrdreKosc.setReserve3(ordreKosc.getReserve3());
                    myOrdreKosc.setReserve4(ordreKosc.getReserve4());
                    myOrdreKosc.setRacordementLong(ordreKosc.getRacordementLong());
                    ordreKoscDao.save(myOrdreKosc);
                } else {
                    resultat.add(ordreKosc);
                }

            }
        }
        return resultat;
    }

    private List<OrdreKosc> importerERdv(List<OrdreKosc> ordreKoscs) {
        List<OrdreKosc> resultat = new ArrayList<>();
        if (ordreKoscs != null) {
            for (OrdreKosc ordreKosc : ordreKoscs) {
                prepareSave(ordreKosc);
                OrdreKosc foundedOrdreKosc = ordreKoscDao.findByReferenceWorkOrderAndEtat(ordreKosc.getReference());
//                if (!foundedOrdreKosc.isEmpty()) {}
//                    for (OrdreKosc foundedOrdreKoscs : foundedOrdreKosc) {}
                        if (foundedOrdreKosc == null) {
                            // findOrSave operator departement and technicien
                            ordreKosc.setEtatDemandeKosc(etatDemandeKoscService.findByCode(ordreKosc.getEtatDemandeKosc().getCode()));
                            ordreKosc.setErdv(true);
                            ordreKoscDao.save(ordreKosc);
                        } else {
                            resultat.add(ordreKosc);
                        }
            }
        }
        return resultat;
    }

    public void uploadExcel(MultipartFile file) throws IOException {
        String fullPath = "D:\\uploads\\";
        file.transferTo(new File(fullPath + file.getOriginalFilename()));
    }


    private void findOperator(OrdreKosc ordreKosc) {
        Operator loadedOperator = operatorService.findByIdOrReference(ordreKosc.getOperator());

        if (loadedOperator == null) {
            return;
        }
        ordreKosc.setOperator(loadedOperator);
    }

    private void findDepartement(OrdreKosc ordreKosc) {
        Departement loadedDepartement = departementService.findByIdOrCode(ordreKosc.getDepartement());

        if (loadedDepartement == null) {
            return;
        }
        ordreKosc.setDepartement(loadedDepartement);
    }

    private void findTechnicien(OrdreKosc ordreKosc) {
        Technicien loadedTechnicien = technicienService.findByIdOrIdentifiant(ordreKosc.getTechnicien());

        if (loadedTechnicien == null) {
            return;
        }
        ordreKosc.setTechnicien(loadedTechnicien);
    }

    private void findOrSaveOperator(OrdreKosc ordreKosc) {
        if (ordreKosc.getOperator() != null) {
            Operator loadedOperator = operatorService.findByLibelle(ordreKosc.getOperator().getLibelle());
            if (loadedOperator == null) {
                ordreKosc.setOperator(operatorService.save(ordreKosc.getOperator()));
            } else {
                ordreKosc.setOperator(loadedOperator);
            }
        }
    }

    private void findOrSaveDepartement(OrdreKosc ordreKosc) {
        if (ordreKosc.getDepartement() != null) {
            Departement loadedDepartement = departementService.findByIdOrCode(ordreKosc.getDepartement());
            if (loadedDepartement == null) {
                ordreKosc.getDepartement().setLibelle(ordreKosc.getDepartement().getCode());
                loadedDepartement = departementService.save(ordreKosc.getDepartement());
                ordreKosc.setDepartement(loadedDepartement);
            } else {
                ordreKosc.setDepartement(loadedDepartement);
            }
        }
    }

    private void findOrSaveTechnicien(OrdreKosc ordreKosc) {
        if (ordreKosc.getTechnicien() != null) {
            Technicien loadedTechnicien = technicienService.findByIdOrIdentifiant(ordreKosc.getTechnicien());
            if (loadedTechnicien == null) {
                loadedTechnicien = technicienService.save(ordreKosc.getTechnicien());
                ordreKosc.setTechnicien(loadedTechnicien);
            } else {
                ordreKosc.setTechnicien(loadedTechnicien);
            }
        }
    }




    private void initDateDernierAppel(OrdreKosc ordreKosc) {
        if (ordreKosc.getDateTroisiemeAppel() != null) {
            ordreKosc.setDateDernierAppel(ordreKosc.getDateTroisiemeAppel());
            ordreKosc.setNumeroDernierAppel(3L);
        } else if (ordreKosc.getDateDeuxiemeAppel() != null) {
            ordreKosc.setDateDernierAppel(ordreKosc.getDateDeuxiemeAppel());
            ordreKosc.setNumeroDernierAppel(2L);
        } else if (ordreKosc.getDatePremierAppel() != null) {
            ordreKosc.setDateDernierAppel(ordreKosc.getDatePremierAppel());
            ordreKosc.setNumeroDernierAppel(1L);
        }
    }


    private void prepareSave(OrdreKosc ordreKosc) {
        if (ordreKosc.getRacordementLong() == null)
            ordreKosc.setRacordementLong(false);
        if (ordreKosc.getExistingOtp() == null)
            ordreKosc.setExistingOtp(false);
        if (ordreKosc.getEnvoyePlanification() == null)
            ordreKosc.setEnvoyePlanification(false);
        if (ordreKosc.getEnvoyeReplanification() == null)
            ordreKosc.setEnvoyeReplanification(false);
        if (ordreKosc.getEnvoyeRefus() == null)
            ordreKosc.setEnvoyeRefus(false);
        if (ordreKosc.getEnvoyeMauvaisContact() == null)
            ordreKosc.setEnvoyeMauvaisContact(false);
        if (ordreKosc.getEnvoyeConfirmationClient() == null)
            ordreKosc.setEnvoyeConfirmationClient(false);
        if (ordreKosc.getEnvoyeCri() == null)
            ordreKosc.setEnvoyeCri(false);
        if (ordreKosc.getEnvoyeFtl() == null)
            ordreKosc.setEnvoyeFtl(false);
        if (ordreKosc.getEnvoyeClientInjoinable() == null)
            ordreKosc.setEnvoyeClientInjoinable(false);
        if (ordreKosc.getEnvoyeClientInjoinableKosc() == null)
            ordreKosc.setEnvoyeClientInjoinableKosc(false);
        if (ordreKosc.getEnvoyeCloture() == null)
            ordreKosc.setEnvoyeCloture(false);
        if (ordreKosc.getEnvoyeSuivi() == null)
            ordreKosc.setEnvoyeSuivi(false);
        initDateDernierAppel(ordreKosc);

    }
}