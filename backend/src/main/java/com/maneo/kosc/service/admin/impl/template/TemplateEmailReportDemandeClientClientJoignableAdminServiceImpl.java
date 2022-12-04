package com.maneo.kosc.service.admin.impl.template;

import java.util.List;

import java.util.ArrayList;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.stereotype.Service;
import javax.persistence.EntityManager;
import com.maneo.kosc.bean.template.TemplateEmailReportDemandeClientClientJoignable;
import com.maneo.kosc.dao.template.TemplateEmailReportDemandeClientClientJoignableDao;
import com.maneo.kosc.service.admin.facade.template.TemplateEmailReportDemandeClientClientJoignableAdminService;

import com.maneo.kosc.ws.rest.provided.vo.template.TemplateEmailReportDemandeClientClientJoignableVo;
import com.maneo.kosc.service.util.*;

import com.maneo.kosc.service.core.impl.AbstractServiceImpl;

@Service
public class TemplateEmailReportDemandeClientClientJoignableAdminServiceImpl extends AbstractServiceImpl<TemplateEmailReportDemandeClientClientJoignable> implements TemplateEmailReportDemandeClientClientJoignableAdminService {

@Autowired
private TemplateEmailReportDemandeClientClientJoignableDao templateEmailReportDemandeClientClientJoignableDao;



@Autowired
private EntityManager entityManager;


@Override
public List<TemplateEmailReportDemandeClientClientJoignable> findAll(){
        return templateEmailReportDemandeClientClientJoignableDao.findAll();
}

@Override
public TemplateEmailReportDemandeClientClientJoignable findById(Long id){
if(id==null) return null;
return templateEmailReportDemandeClientClientJoignableDao.getOne(id);
}

@Override
public TemplateEmailReportDemandeClientClientJoignable findByIdWithAssociatedList(Long id){
    return findById(id);
}



@Transactional
public int deleteById(Long id){
int res=0;
if(templateEmailReportDemandeClientClientJoignableDao.findById(id).isPresent())  {
templateEmailReportDemandeClientClientJoignableDao.deleteById(id);
res = 1;
}
return res;
}


@Override
public TemplateEmailReportDemandeClientClientJoignable update(TemplateEmailReportDemandeClientClientJoignable templateEmailReportDemandeClientClientJoignable){
TemplateEmailReportDemandeClientClientJoignable foundedTemplateEmailReportDemandeClientClientJoignable = findById(templateEmailReportDemandeClientClientJoignable.getId());
if(foundedTemplateEmailReportDemandeClientClientJoignable==null) return null;
else{
return  templateEmailReportDemandeClientClientJoignableDao.save(templateEmailReportDemandeClientClientJoignable);
}
}

@Override
public TemplateEmailReportDemandeClientClientJoignable save (TemplateEmailReportDemandeClientClientJoignable templateEmailReportDemandeClientClientJoignable){



    return templateEmailReportDemandeClientClientJoignableDao.save(templateEmailReportDemandeClientClientJoignable);


}

@Override
public List<TemplateEmailReportDemandeClientClientJoignable> save(List<TemplateEmailReportDemandeClientClientJoignable> templateEmailReportDemandeClientClientJoignables){
List<TemplateEmailReportDemandeClientClientJoignable> list = new ArrayList<>();
for(TemplateEmailReportDemandeClientClientJoignable templateEmailReportDemandeClientClientJoignable: templateEmailReportDemandeClientClientJoignables){
list.add(save(templateEmailReportDemandeClientClientJoignable));
}
return list;
}



@Override
@Transactional
public int delete(TemplateEmailReportDemandeClientClientJoignable templateEmailReportDemandeClientClientJoignable){
    if(templateEmailReportDemandeClientClientJoignable.getId()==null) return -1;
    TemplateEmailReportDemandeClientClientJoignable foundedTemplateEmailReportDemandeClientClientJoignable = findById(templateEmailReportDemandeClientClientJoignable.getId());
    if(foundedTemplateEmailReportDemandeClientClientJoignable==null) return -1;
templateEmailReportDemandeClientClientJoignableDao.delete(foundedTemplateEmailReportDemandeClientClientJoignable);
return 1;
}


public List<TemplateEmailReportDemandeClientClientJoignable> findByCriteria(TemplateEmailReportDemandeClientClientJoignableVo templateEmailReportDemandeClientClientJoignableVo){
String query = "SELECT o FROM TemplateEmailReportDemandeClientClientJoignable o  WHERE 1=1";
            query += SearchUtil.addConstraint( "o", "id","=",templateEmailReportDemandeClientClientJoignableVo.getId());
            query += SearchUtil.addConstraint( "o", "libelle","LIKE",templateEmailReportDemandeClientClientJoignableVo.getLibelle());
            query += SearchUtil.addConstraint( "o", "objet","LIKE",templateEmailReportDemandeClientClientJoignableVo.getObjet());
            query += SearchUtil.addConstraint( "o", "corps","LIKE",templateEmailReportDemandeClientClientJoignableVo.getCorps());
return entityManager.createQuery(query).getResultList();
}


@Override
@Transactional
public void delete(List<TemplateEmailReportDemandeClientClientJoignable> templateEmailReportDemandeClientClientJoignables){
if(ListUtil.isNotEmpty(templateEmailReportDemandeClientClientJoignables)){
templateEmailReportDemandeClientClientJoignables.forEach(e->templateEmailReportDemandeClientClientJoignableDao.delete(e));
}
}
@Override
public void update(List<TemplateEmailReportDemandeClientClientJoignable> templateEmailReportDemandeClientClientJoignables){
if(ListUtil.isNotEmpty(templateEmailReportDemandeClientClientJoignables)){
templateEmailReportDemandeClientClientJoignables.forEach(e->templateEmailReportDemandeClientClientJoignableDao.save(e));
}
}




    }
