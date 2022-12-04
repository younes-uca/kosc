package com.maneo.kosc.ws.rest.provided.facade.admin;

import com.maneo.kosc.service.admin.facade.TemplateEmailReportDemandeClientClientJoignableAdminService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import com.maneo.kosc.bean.template.TemplateEmailReportDemandeClientClientJoignable;
import com.maneo.kosc.ws.rest.provided.converter.TemplateEmailReportDemandeClientClientJoignableConverter;
import com.maneo.kosc.ws.rest.provided.vo.TemplateEmailReportDemandeClientClientJoignableVo;

@Api("Manages templateEmailReportDemandeClientClientJoignable services")
@RestController
@RequestMapping("api/admin/templateEmailReportDemandeClientClientJoignable")
public class TemplateEmailReportDemandeClientClientJoignableRestAdmin {

@Autowired
private TemplateEmailReportDemandeClientClientJoignableAdminService templateEmailReportDemandeClientClientJoignableService;

@Autowired
private TemplateEmailReportDemandeClientClientJoignableConverter templateEmailReportDemandeClientClientJoignableConverter;


            @ApiOperation("Updates the specified  templateEmailReportDemandeClientClientJoignable")
            @PutMapping("/")
            public  TemplateEmailReportDemandeClientClientJoignableVo update(@RequestBody  TemplateEmailReportDemandeClientClientJoignableVo  templateEmailReportDemandeClientClientJoignableVo){
            TemplateEmailReportDemandeClientClientJoignable templateEmailReportDemandeClientClientJoignable = templateEmailReportDemandeClientClientJoignableConverter.toItem(templateEmailReportDemandeClientClientJoignableVo);
            templateEmailReportDemandeClientClientJoignable = templateEmailReportDemandeClientClientJoignableService.update(templateEmailReportDemandeClientClientJoignable);
            return templateEmailReportDemandeClientClientJoignableConverter.toVo(templateEmailReportDemandeClientClientJoignable);
            }

    @ApiOperation("Finds a list of all templateEmailReportDemandeClientClientJoignables")
    @GetMapping("/")
    public List<TemplateEmailReportDemandeClientClientJoignableVo> findAll(){
        return templateEmailReportDemandeClientClientJoignableConverter.toVo(templateEmailReportDemandeClientClientJoignableService.findAll());
    }

    @ApiOperation("Finds a templateEmailReportDemandeClientClientJoignable with associated lists by id")
    @GetMapping("/detail/id/{id}")
    public TemplateEmailReportDemandeClientClientJoignableVo findByIdWithAssociatedList(@PathVariable Long id){
    return templateEmailReportDemandeClientClientJoignableConverter.toVo(templateEmailReportDemandeClientClientJoignableService.findByIdWithAssociatedList(id));
    }

    @ApiOperation("Search templateEmailReportDemandeClientClientJoignable by a specific criteria")
    @PostMapping("/search")
    public List<TemplateEmailReportDemandeClientClientJoignableVo> findByCriteria(@RequestBody TemplateEmailReportDemandeClientClientJoignableVo templateEmailReportDemandeClientClientJoignableVo){
        return templateEmailReportDemandeClientClientJoignableConverter.toVo(templateEmailReportDemandeClientClientJoignableService.findByCriteria(templateEmailReportDemandeClientClientJoignableVo));
        }

            @ApiOperation("Finds a templateEmailReportDemandeClientClientJoignable by id")
            @GetMapping("/id/{id}")
            public TemplateEmailReportDemandeClientClientJoignableVo findById(@PathVariable Long id){
            return templateEmailReportDemandeClientClientJoignableConverter.toVo(templateEmailReportDemandeClientClientJoignableService.findById(id));
            }

            @ApiOperation("Saves the specified  templateEmailReportDemandeClientClientJoignable")
            @PostMapping("/")
            public TemplateEmailReportDemandeClientClientJoignableVo save(@RequestBody TemplateEmailReportDemandeClientClientJoignableVo templateEmailReportDemandeClientClientJoignableVo){
            TemplateEmailReportDemandeClientClientJoignable templateEmailReportDemandeClientClientJoignable = templateEmailReportDemandeClientClientJoignableConverter.toItem(templateEmailReportDemandeClientClientJoignableVo);
            templateEmailReportDemandeClientClientJoignable = templateEmailReportDemandeClientClientJoignableService.save(templateEmailReportDemandeClientClientJoignable);
            return templateEmailReportDemandeClientClientJoignableConverter.toVo(templateEmailReportDemandeClientClientJoignable);
            }

            @ApiOperation("Delete the specified templateEmailReportDemandeClientClientJoignable")
            @DeleteMapping("/")
            public int delete(@RequestBody TemplateEmailReportDemandeClientClientJoignableVo templateEmailReportDemandeClientClientJoignableVo){
            TemplateEmailReportDemandeClientClientJoignable templateEmailReportDemandeClientClientJoignable = templateEmailReportDemandeClientClientJoignableConverter.toItem(templateEmailReportDemandeClientClientJoignableVo);
            return templateEmailReportDemandeClientClientJoignableService.delete(templateEmailReportDemandeClientClientJoignable);
            }

            @ApiOperation("Deletes a templateEmailReportDemandeClientClientJoignable by id")
            @DeleteMapping("/id/{id}")
            public int deleteById(@PathVariable Long id){
            return templateEmailReportDemandeClientClientJoignableService.deleteById(id);
            }


            }
