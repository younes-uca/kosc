package com.maneo.kosc.service.chercheur.facade;

import com.maneo.kosc.bean.referentiel.EtatDemandeKosc;
import com.maneo.kosc.ws.rest.provided.vo.referentiel.EtatDemandeKoscVo;
import com.maneo.kosc.service.core.facade.AbstractService;

public interface EtatDemandeKoscChercheurService extends AbstractService<EtatDemandeKosc, Long, EtatDemandeKoscVo> {


    /**
     * find EtatDemandeKosc from database by code (reference)
     *
     * @param code - reference of EtatDemandeKosc
     * @return the founded EtatDemandeKosc , If no EtatDemandeKosc were
     * found in database return  null.
     */
    EtatDemandeKosc findByCode(String code);

    /**
     * find EtatDemandeKosc from database by id (PK) or code (reference)
     *
     * @param id   - id of EtatDemandeKosc
     * @param code - reference of EtatDemandeKosc
     * @return the founded EtatDemandeKosc , If no EtatDemandeKosc were
     * found in database return  null.
     */
    EtatDemandeKosc findByIdOrCode(EtatDemandeKosc etatDemandeKosc);


    /**
     * delete EtatDemandeKosc from database
     *
     * @param id - id of EtatDemandeKosc to be deleted
     */
    int deleteById(Long id);


    /**
     * delete EtatDemandeKosc from database by code (reference)
     *
     * @param code - reference of EtatDemandeKosc to be deleted
     * @return 1 if EtatDemandeKosc deleted successfully
     */
    int deleteByCode(String code);


}
