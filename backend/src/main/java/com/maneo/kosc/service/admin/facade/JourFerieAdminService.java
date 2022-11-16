package com.maneo.kosc.service.admin.facade;

import com.maneo.kosc.bean.JourFerie;
import com.maneo.kosc.ws.rest.provided.vo.JourFerieVo;
import org.springframework.transaction.annotation.Transactional;

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

    JourFerie findByIdWithAssociatedList(Long id);

    public List<JourFerie> findByCriteria(JourFerieVo jourFerieVo);

}