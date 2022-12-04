package com.maneo.kosc.ws.rest.provided.facade.admin;

import com.maneo.kosc.service.admin.facade.TemplateEmailReportDemandeManeoClientInjoignableAdminService;

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
import com.maneo.kosc.bean.template.TemplateEmailReportDemandeManeoClientInjoignable;
import com.maneo.kosc.ws.rest.provided.converter.TemplateEmailReportDemandeManeoClientInjoignableConverter;
import com.maneo.kosc.ws.rest.provided.vo.TemplateEmailReportDemandeManeoClientInjoignableVo;

@Api("Manages templateEmailReportDemandeManeoClientInjoignable services")
@RestController
@RequestMapping("api/admin/templateEmailReportDemandeManeoClientInjoignable")
public class TemplateEmailReportDemandeManeoClientInjoignableRestAdmin {

@Autowired
private TemplateEmailReportDemandeManeoClientInjoignableAdminService templateEmailReportDemandeManeoClientInjoignableService;

@Autowired
private TemplateEmailReportDemandeManeoClientInjoignableConverter templateEmailReportDemandeManeoClientInjoignableConverter;


            @ApiOperation("Updates the specified  templateEmailReportDemandeManeoClientInjoignable")
            @PutMapping("/")
            public  TemplateEmailReportDemandeManeoClientInjoignableVo update(@RequestBody  TemplateEmailReportDemandeManeoClientInjoignableVo  templateEmailReportDemandeManeoClientInjoignableVo){
            TemplateEmailReportDemandeManeoClientInjoignable templateEmailReportDemandeManeoClientInjoignable = templateEmailReportDemandeManeoClientInjoignableConverter.toItem(templateEmailReportDemandeManeoClientInjoignableVo);
            templateEmailReportDemandeManeoClientInjoignable = templateEmailReportDemandeManeoClientInjoignableService.update(templateEmailReportDemandeManeoClientInjoignable);
            return templateEmailReportDemandeManeoClientInjoignableConverter.toVo(templateEmailReportDemandeManeoClientInjoignable);
            }

    @ApiOperation("Finds a list of all templateEmailReportDemandeManeoClientInjoignables")
    @GetMapping("/")
    public List<TemplateEmailReportDemandeManeoClientInjoignableVo> findAll(){
        return templateEmailReportDemandeManeoClientInjoignableConverter.toVo(templateEmailReportDemandeManeoClientInjoignableService.findAll());
    }

    @ApiOperation("Finds a templateEmailReportDemandeManeoClientInjoignable with associated lists by id")
    @GetMapping("/detail/id/{id}")
    public TemplateEmailReportDemandeManeoClientInjoignableVo findByIdWithAssociatedList(@PathVariable Long id){
    return templateEmailReportDemandeManeoClientInjoignableConverter.toVo(templateEmailReportDemandeManeoClientInjoignableService.findByIdWithAssociatedList(id));
    }

    @ApiOperation("Search templateEmailReportDemandeManeoClientInjoignable by a specific criteria")
    @PostMapping("/search")
    public List<TemplateEmailReportDemandeManeoClientInjoignableVo> findByCriteria(@RequestBody TemplateEmailReportDemandeManeoClientInjoignableVo templateEmailReportDemandeManeoClientInjoignableVo){
        return templateEmailReportDemandeManeoClientInjoignableConverter.toVo(templateEmailReportDemandeManeoClientInjoignableService.findByCriteria(templateEmailReportDemandeManeoClientInjoignableVo));
        }

            @ApiOperation("Finds a templateEmailReportDemandeManeoClientInjoignable by id")
            @GetMapping("/id/{id}")
            public TemplateEmailReportDemandeManeoClientInjoignableVo findById(@PathVariable Long id){
            return templateEmailReportDemandeManeoClientInjoignableConverter.toVo(templateEmailReportDemandeManeoClientInjoignableService.findById(id));
            }

            @ApiOperation("Saves the specified  templateEmailReportDemandeManeoClientInjoignable")
            @PostMapping("/")
            public TemplateEmailReportDemandeManeoClientInjoignableVo save(@RequestBody TemplateEmailReportDemandeManeoClientInjoignableVo templateEmailReportDemandeManeoClientInjoignableVo){
            TemplateEmailReportDemandeManeoClientInjoignable templateEmailReportDemandeManeoClientInjoignable = templateEmailReportDemandeManeoClientInjoignableConverter.toItem(templateEmailReportDemandeManeoClientInjoignableVo);
            templateEmailReportDemandeManeoClientInjoignable = templateEmailReportDemandeManeoClientInjoignableService.save(templateEmailReportDemandeManeoClientInjoignable);
            return templateEmailReportDemandeManeoClientInjoignableConverter.toVo(templateEmailReportDemandeManeoClientInjoignable);
            }

            @ApiOperation("Delete the specified templateEmailReportDemandeManeoClientInjoignable")
            @DeleteMapping("/")
            public int delete(@RequestBody TemplateEmailReportDemandeManeoClientInjoignableVo templateEmailReportDemandeManeoClientInjoignableVo){
            TemplateEmailReportDemandeManeoClientInjoignable templateEmailReportDemandeManeoClientInjoignable = templateEmailReportDemandeManeoClientInjoignableConverter.toItem(templateEmailReportDemandeManeoClientInjoignableVo);
            return templateEmailReportDemandeManeoClientInjoignableService.delete(templateEmailReportDemandeManeoClientInjoignable);
            }

            @ApiOperation("Deletes a templateEmailReportDemandeManeoClientInjoignable by id")
            @DeleteMapping("/id/{id}")
            public int deleteById(@PathVariable Long id){
            return templateEmailReportDemandeManeoClientInjoignableService.deleteById(id);
            }


            }
