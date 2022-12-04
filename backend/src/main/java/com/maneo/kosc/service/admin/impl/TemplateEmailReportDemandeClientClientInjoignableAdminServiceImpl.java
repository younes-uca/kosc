package com.maneo.kosc.service.admin.impl;

import java.util.List;

import java.util.ArrayList;

import com.maneo.kosc.service.admin.facade.TemplateEmailReportDemandeClientClientInjoignableAdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.stereotype.Service;
import javax.persistence.EntityManager;
import com.maneo.kosc.bean.template.TemplateEmailReportDemandeClientClientInjoignable;
import com.maneo.kosc.dao.TemplateEmailReportDemandeClientClientInjoignableDao;

import com.maneo.kosc.ws.rest.provided.vo.TemplateEmailReportDemandeClientClientInjoignableVo;
import com.maneo.kosc.service.util.*;

import com.maneo.kosc.service.core.impl.AbstractServiceImpl;

@Service
public class TemplateEmailReportDemandeClientClientInjoignableAdminServiceImpl extends AbstractServiceImpl<TemplateEmailReportDemandeClientClientInjoignable> implements TemplateEmailReportDemandeClientClientInjoignableAdminService {

@Autowired
private TemplateEmailReportDemandeClientClientInjoignableDao templateEmailReportDemandeClientClientInjoignableDao;



@Autowired
private EntityManager entityManager;


@Override
public List<TemplateEmailReportDemandeClientClientInjoignable> findAll(){
        return templateEmailReportDemandeClientClientInjoignableDao.findAll();
}

@Override
public TemplateEmailReportDemandeClientClientInjoignable findById(Long id){
if(id==null) return null;
return templateEmailReportDemandeClientClientInjoignableDao.getOne(id);
}

@Override
public TemplateEmailReportDemandeClientClientInjoignable findByIdWithAssociatedList(Long id){
    return findById(id);
}



@Transactional
public int deleteById(Long id){
int res=0;
if(templateEmailReportDemandeClientClientInjoignableDao.findById(id).isPresent())  {
templateEmailReportDemandeClientClientInjoignableDao.deleteById(id);
res = 1;
}
return res;
}


@Override
public TemplateEmailReportDemandeClientClientInjoignable update(TemplateEmailReportDemandeClientClientInjoignable templateEmailReportDemandeClientClientInjoignable){
TemplateEmailReportDemandeClientClientInjoignable foundedTemplateEmailReportDemandeClientClientInjoignable = findById(templateEmailReportDemandeClientClientInjoignable.getId());
if(foundedTemplateEmailReportDemandeClientClientInjoignable==null) return null;
else{
return  templateEmailReportDemandeClientClientInjoignableDao.save(templateEmailReportDemandeClientClientInjoignable);
}
}

@Override
public TemplateEmailReportDemandeClientClientInjoignable save (TemplateEmailReportDemandeClientClientInjoignable templateEmailReportDemandeClientClientInjoignable){



    return templateEmailReportDemandeClientClientInjoignableDao.save(templateEmailReportDemandeClientClientInjoignable);


}

@Override
public List<TemplateEmailReportDemandeClientClientInjoignable> save(List<TemplateEmailReportDemandeClientClientInjoignable> templateEmailReportDemandeClientClientInjoignables){
List<TemplateEmailReportDemandeClientClientInjoignable> list = new ArrayList<>();
for(TemplateEmailReportDemandeClientClientInjoignable templateEmailReportDemandeClientClientInjoignable: templateEmailReportDemandeClientClientInjoignables){
list.add(save(templateEmailReportDemandeClientClientInjoignable));
}
return list;
}



@Override
@Transactional
public int delete(TemplateEmailReportDemandeClientClientInjoignable templateEmailReportDemandeClientClientInjoignable){
    if(templateEmailReportDemandeClientClientInjoignable.getId()==null) return -1;
    TemplateEmailReportDemandeClientClientInjoignable foundedTemplateEmailReportDemandeClientClientInjoignable = findById(templateEmailReportDemandeClientClientInjoignable.getId());
    if(foundedTemplateEmailReportDemandeClientClientInjoignable==null) return -1;
templateEmailReportDemandeClientClientInjoignableDao.delete(foundedTemplateEmailReportDemandeClientClientInjoignable);
return 1;
}


public List<TemplateEmailReportDemandeClientClientInjoignable> findByCriteria(TemplateEmailReportDemandeClientClientInjoignableVo templateEmailReportDemandeClientClientInjoignableVo){
String query = "SELECT o FROM TemplateEmailReportDemandeClientClientInjoignable o  WHERE 1=1";
            query += SearchUtil.addConstraint( "o", "id","=",templateEmailReportDemandeClientClientInjoignableVo.getId());
            query += SearchUtil.addConstraint( "o", "libelle","LIKE",templateEmailReportDemandeClientClientInjoignableVo.getLibelle());
            query += SearchUtil.addConstraint( "o", "objet","LIKE",templateEmailReportDemandeClientClientInjoignableVo.getObjet());
            query += SearchUtil.addConstraint( "o", "corps","LIKE",templateEmailReportDemandeClientClientInjoignableVo.getCorps());
return entityManager.createQuery(query).getResultList();
}


@Override
@Transactional
public void delete(List<TemplateEmailReportDemandeClientClientInjoignable> templateEmailReportDemandeClientClientInjoignables){
if(ListUtil.isNotEmpty(templateEmailReportDemandeClientClientInjoignables)){
templateEmailReportDemandeClientClientInjoignables.forEach(e->templateEmailReportDemandeClientClientInjoignableDao.delete(e));
}
}
@Override
public void update(List<TemplateEmailReportDemandeClientClientInjoignable> templateEmailReportDemandeClientClientInjoignables){
if(ListUtil.isNotEmpty(templateEmailReportDemandeClientClientInjoignables)){
templateEmailReportDemandeClientClientInjoignables.forEach(e->templateEmailReportDemandeClientClientInjoignableDao.save(e));
}
}




    }
