package com.maneo.kosc.service.admin.facade;

import com.maneo.kosc.bean.ArretTravail;
import com.maneo.kosc.bean.JourFerie;
import com.maneo.kosc.service.core.facade.AbstractService;
import com.maneo.kosc.ws.rest.provided.vo.ArretTravailVo;
import com.maneo.kosc.ws.rest.provided.vo.JourFerieVo;
import org.springframework.transaction.annotation.Transactional;

import java.util.Date;
import java.util.List;

public interface JourFerieAdminService {


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
    public List<JourFerie> findByCriteria(JourFerieVo jourFerieVo);

}
