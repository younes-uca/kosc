package com.maneo.kosc.service.admin.impl;

import java.util.List;

import java.util.ArrayList;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.stereotype.Service;
import javax.persistence.EntityManager;
import com.maneo.kosc.bean.TemplateEmailReportDemandeManeoClientJoignableRefus;
import com.maneo.kosc.dao.TemplateEmailReportDemandeManeoClientJoignableRefusDao;
import com.maneo.kosc.service.admin.facade.TemplateEmailReportDemandeManeoClientJoignableRefusAdminService;

import com.maneo.kosc.ws.rest.provided.vo.TemplateEmailReportDemandeManeoClientJoignableRefusVo;
import com.maneo.kosc.service.util.*;

import com.maneo.kosc.service.core.impl.AbstractServiceImpl;

@Service
public class TemplateEmailReportDemandeManeoClientJoignableRefusAdminServiceImpl extends AbstractServiceImpl<TemplateEmailReportDemandeManeoClientJoignableRefus> implements TemplateEmailReportDemandeManeoClientJoignableRefusAdminService {

@Autowired
private TemplateEmailReportDemandeManeoClientJoignableRefusDao templateEmailReportDemandeManeoClientJoignableRefusDao;



@Autowired
private EntityManager entityManager;


@Override
public List<TemplateEmailReportDemandeManeoClientJoignableRefus> findAll(){
        return templateEmailReportDemandeManeoClientJoignableRefusDao.findAll();
}

@Override
public TemplateEmailReportDemandeManeoClientJoignableRefus findById(Long id){
if(id==null) return null;
return templateEmailReportDemandeManeoClientJoignableRefusDao.getOne(id);
}

@Override
public TemplateEmailReportDemandeManeoClientJoignableRefus findByIdWithAssociatedList(Long id){
    return findById(id);
}



@Transactional
public int deleteById(Long id){
int res=0;
if(templateEmailReportDemandeManeoClientJoignableRefusDao.findById(id).isPresent())  {
templateEmailReportDemandeManeoClientJoignableRefusDao.deleteById(id);
res = 1;
}
return res;
}


@Override
public TemplateEmailReportDemandeManeoClientJoignableRefus update(TemplateEmailReportDemandeManeoClientJoignableRefus templateEmailReportDemandeManeoClientJoignableRefus){
TemplateEmailReportDemandeManeoClientJoignableRefus foundedTemplateEmailReportDemandeManeoClientJoignableRefus = findById(templateEmailReportDemandeManeoClientJoignableRefus.getId());
if(foundedTemplateEmailReportDemandeManeoClientJoignableRefus==null) return null;
else{
return  templateEmailReportDemandeManeoClientJoignableRefusDao.save(templateEmailReportDemandeManeoClientJoignableRefus);
}
}

@Override
public TemplateEmailReportDemandeManeoClientJoignableRefus save (TemplateEmailReportDemandeManeoClientJoignableRefus templateEmailReportDemandeManeoClientJoignableRefus){



    return templateEmailReportDemandeManeoClientJoignableRefusDao.save(templateEmailReportDemandeManeoClientJoignableRefus);


}

@Override
public List<TemplateEmailReportDemandeManeoClientJoignableRefus> save(List<TemplateEmailReportDemandeManeoClientJoignableRefus> templateEmailReportDemandeManeoClientJoignableRefuss){
List<TemplateEmailReportDemandeManeoClientJoignableRefus> list = new ArrayList<>();
for(TemplateEmailReportDemandeManeoClientJoignableRefus templateEmailReportDemandeManeoClientJoignableRefus: templateEmailReportDemandeManeoClientJoignableRefuss){
list.add(save(templateEmailReportDemandeManeoClientJoignableRefus));
}
return list;
}



@Override
@Transactional
public int delete(TemplateEmailReportDemandeManeoClientJoignableRefus templateEmailReportDemandeManeoClientJoignableRefus){
    if(templateEmailReportDemandeManeoClientJoignableRefus.getId()==null) return -1;
    TemplateEmailReportDemandeManeoClientJoignableRefus foundedTemplateEmailReportDemandeManeoClientJoignableRefus = findById(templateEmailReportDemandeManeoClientJoignableRefus.getId());
    if(foundedTemplateEmailReportDemandeManeoClientJoignableRefus==null) return -1;
templateEmailReportDemandeManeoClientJoignableRefusDao.delete(foundedTemplateEmailReportDemandeManeoClientJoignableRefus);
return 1;
}


public List<TemplateEmailReportDemandeManeoClientJoignableRefus> findByCriteria(TemplateEmailReportDemandeManeoClientJoignableRefusVo templateEmailReportDemandeManeoClientJoignableRefusVo){
String query = "SELECT o FROM TemplateEmailReportDemandeManeoClientJoignableRefus o  WHERE 1=1";
            query += SearchUtil.addConstraint( "o", "id","=",templateEmailReportDemandeManeoClientJoignableRefusVo.getId());
            query += SearchUtil.addConstraint( "o", "libelle","LIKE",templateEmailReportDemandeManeoClientJoignableRefusVo.getLibelle());
            query += SearchUtil.addConstraint( "o", "objet","LIKE",templateEmailReportDemandeManeoClientJoignableRefusVo.getObjet());
            query += SearchUtil.addConstraint( "o", "corps","LIKE",templateEmailReportDemandeManeoClientJoignableRefusVo.getCorps());
return entityManager.createQuery(query).getResultList();
}


@Override
@Transactional
public void delete(List<TemplateEmailReportDemandeManeoClientJoignableRefus> templateEmailReportDemandeManeoClientJoignableRefuss){
if(ListUtil.isNotEmpty(templateEmailReportDemandeManeoClientJoignableRefuss)){
templateEmailReportDemandeManeoClientJoignableRefuss.forEach(e->templateEmailReportDemandeManeoClientJoignableRefusDao.delete(e));
}
}
@Override
public void update(List<TemplateEmailReportDemandeManeoClientJoignableRefus> templateEmailReportDemandeManeoClientJoignableRefuss){
if(ListUtil.isNotEmpty(templateEmailReportDemandeManeoClientJoignableRefuss)){
templateEmailReportDemandeManeoClientJoignableRefuss.forEach(e->templateEmailReportDemandeManeoClientJoignableRefusDao.save(e));
}
}




    }
