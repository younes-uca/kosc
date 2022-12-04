package com.maneo.kosc.service.admin.facade.referentiel;

import com.maneo.kosc.bean.referentiel.JourFerie;
import com.maneo.kosc.ws.rest.provided.vo.referentiel.JourFerieVo;
import org.springframework.transaction.annotation.Transactional;

import java.util.Date;
import java.util.List;

public interface JourFerieAdminService {


    Long calcNombreJourTotal(Date dateDebut, Date dateFin);

    List<JourFerie> findAll();

    int deleteById(Long id);

    JourFerie findById(Long id);

    JourFerie update(JourFerie jourFerie);

    JourFerie save(JourFerie jourFerie);

    List<JourFerie> save(List<JourFerie> jourFeries);

    int delete(JourFerie jourFerie);

    @Transactional
    void delete(List<JourFerie> jourFeries);

    void update(List<JourFerie> jourFeries);

    JourFerie findByIdWithAssociatedList(Long id);

    public List<JourFerie> findByCriteria(JourFerieVo jourFerieVo);

}
