package com.maneo.kosc.service.admin.facade;

import java.util.Date;
import java.util.List;

import com.maneo.kosc.bean.technicien.Technicien;
import com.maneo.kosc.ws.rest.provided.vo.TechnicienVo;
import com.maneo.kosc.service.core.facade.AbstractService;

public interface TechnicienAdminService extends AbstractService<Technicien, Long, TechnicienVo> {

    Technicien findByUsername(String username);


    /**
     * find Technicien from database by identifiant (reference)
     *
     * @param identifiant - reference of Technicien
     * @return the founded Technicien , If no Technicien were
     * found in database return  null.
     */
    Technicien findByIdentifiant(String identifiant);

    /**
     * find Technicien from database by id (PK) or identifiant (reference)
     *
     * @param id          - id of Technicien
     * @param identifiant - reference of Technicien
     * @return the founded Technicien , If no Technicien were
     * found in database return  null.
     */
    Technicien findByIdOrIdentifiant(Technicien technicien);


    /**
     * delete Technicien from database
     *
     * @param id - id of Technicien to be deleted
     */
    int deleteById(Long id);


    List<Technicien> findByEntrepriseCode(String code);

    int deleteByEntrepriseCode(String code);

    List<Technicien> findByEntrepriseId(Long id);

    int deleteByEntrepriseId(Long id);


    /**
     * delete Technicien from database by identifiant (reference)
     *
     * @param identifiant - reference of Technicien to be deleted
     * @return 1 if Technicien deleted successfully
     */
    int deleteByIdentifiant(String identifiant);

    @Override
    Technicien save(Technicien entity);

    List<Technicien> findAppropriateTechnicien (Date dateRdv, String codeDepartement);

}
