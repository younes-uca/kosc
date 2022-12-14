package com.maneo.kosc.service.admin.facade.technicien;

import java.util.List;

import com.maneo.kosc.bean.technicien.DepartementTechnicien;
import com.maneo.kosc.ws.rest.provided.vo.technicien.DepartementTechnicienVo;
import com.maneo.kosc.service.core.facade.AbstractService;

public interface DepartementTechnicienAdminService extends AbstractService<DepartementTechnicien, Long, DepartementTechnicienVo> {


    /**
     * delete DepartementTechnicien from database
     *
     * @param id - id of DepartementTechnicien to be deleted
     */
    int deleteById(Long id);


    void findAllWithArretTravail(List<DepartementTechnicien> departementTechniciens);

    List<DepartementTechnicien> findByTechnicienIdentifiant(String identifiant);

    int deleteByTechnicienIdentifiant(String identifiant);

    List<DepartementTechnicien> findByTechnicienId(Long id);

    int deleteByTechnicienId(Long id);

    List<DepartementTechnicien> findByDepartementCode(String code);

    int deleteByDepartementCode(String code);

    List<DepartementTechnicien> findByDepartementId(Long id);

    int deleteByDepartementId(Long id);


}
