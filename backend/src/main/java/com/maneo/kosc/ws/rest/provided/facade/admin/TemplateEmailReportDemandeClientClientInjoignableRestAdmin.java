package com.maneo.kosc.ws.rest.provided.facade.admin;

import com.maneo.kosc.service.admin.facade.TemplateEmailReportDemandeClientClientInjoignableAdminService;

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
import com.maneo.kosc.bean.TemplateEmailReportDemandeClientClientInjoignable;
import com.maneo.kosc.ws.rest.provided.converter.TemplateEmailReportDemandeClientClientInjoignableConverter;
import com.maneo.kosc.ws.rest.provided.vo.TemplateEmailReportDemandeClientClientInjoignableVo;

@Api("Manages templateEmailReportDemandeClientClientInjoignable services")
@RestController
@RequestMapping("api/admin/templateEmailReportDemandeClientClientInjoignable")
public class TemplateEmailReportDemandeClientClientInjoignableRestAdmin {

@Autowired
private TemplateEmailReportDemandeClientClientInjoignableAdminService templateEmailReportDemandeClientClientInjoignableService;

@Autowired
private TemplateEmailReportDemandeClientClientInjoignableConverter templateEmailReportDemandeClientClientInjoignableConverter;


            @ApiOperation("Updates the specified  templateEmailReportDemandeClientClientInjoignable")
            @PutMapping("/")
            public  TemplateEmailReportDemandeClientClientInjoignableVo update(@RequestBody  TemplateEmailReportDemandeClientClientInjoignableVo  templateEmailReportDemandeClientClientInjoignableVo){
            TemplateEmailReportDemandeClientClientInjoignable templateEmailReportDemandeClientClientInjoignable = templateEmailReportDemandeClientClientInjoignableConverter.toItem(templateEmailReportDemandeClientClientInjoignableVo);
            templateEmailReportDemandeClientClientInjoignable = templateEmailReportDemandeClientClientInjoignableService.update(templateEmailReportDemandeClientClientInjoignable);
            return templateEmailReportDemandeClientClientInjoignableConverter.toVo(templateEmailReportDemandeClientClientInjoignable);
            }

    @ApiOperation("Finds a list of all templateEmailReportDemandeClientClientInjoignables")
    @GetMapping("/")
    public List<TemplateEmailReportDemandeClientClientInjoignableVo> findAll(){
        return templateEmailReportDemandeClientClientInjoignableConverter.toVo(templateEmailReportDemandeClientClientInjoignableService.findAll());
    }

    @ApiOperation("Finds a templateEmailReportDemandeClientClientInjoignable with associated lists by id")
    @GetMapping("/detail/id/{id}")
    public TemplateEmailReportDemandeClientClientInjoignableVo findByIdWithAssociatedList(@PathVariable Long id){
    return templateEmailReportDemandeClientClientInjoignableConverter.toVo(templateEmailReportDemandeClientClientInjoignableService.findByIdWithAssociatedList(id));
    }

    @ApiOperation("Search templateEmailReportDemandeClientClientInjoignable by a specific criteria")
    @PostMapping("/search")
    public List<TemplateEmailReportDemandeClientClientInjoignableVo> findByCriteria(@RequestBody TemplateEmailReportDemandeClientClientInjoignableVo templateEmailReportDemandeClientClientInjoignableVo){
        return templateEmailReportDemandeClientClientInjoignableConverter.toVo(templateEmailReportDemandeClientClientInjoignableService.findByCriteria(templateEmailReportDemandeClientClientInjoignableVo));
        }

            @ApiOperation("Finds a templateEmailReportDemandeClientClientInjoignable by id")
            @GetMapping("/id/{id}")
            public TemplateEmailReportDemandeClientClientInjoignableVo findById(@PathVariable Long id){
            return templateEmailReportDemandeClientClientInjoignableConverter.toVo(templateEmailReportDemandeClientClientInjoignableService.findById(id));
            }

            @ApiOperation("Saves the specified  templateEmailReportDemandeClientClientInjoignable")
            @PostMapping("/")
            public TemplateEmailReportDemandeClientClientInjoignableVo save(@RequestBody TemplateEmailReportDemandeClientClientInjoignableVo templateEmailReportDemandeClientClientInjoignableVo){
            TemplateEmailReportDemandeClientClientInjoignable templateEmailReportDemandeClientClientInjoignable = templateEmailReportDemandeClientClientInjoignableConverter.toItem(templateEmailReportDemandeClientClientInjoignableVo);
            templateEmailReportDemandeClientClientInjoignable = templateEmailReportDemandeClientClientInjoignableService.save(templateEmailReportDemandeClientClientInjoignable);
            return templateEmailReportDemandeClientClientInjoignableConverter.toVo(templateEmailReportDemandeClientClientInjoignable);
            }

            @ApiOperation("Delete the specified templateEmailReportDemandeClientClientInjoignable")
            @DeleteMapping("/")
            public int delete(@RequestBody TemplateEmailReportDemandeClientClientInjoignableVo templateEmailReportDemandeClientClientInjoignableVo){
            TemplateEmailReportDemandeClientClientInjoignable templateEmailReportDemandeClientClientInjoignable = templateEmailReportDemandeClientClientInjoignableConverter.toItem(templateEmailReportDemandeClientClientInjoignableVo);
            return templateEmailReportDemandeClientClientInjoignableService.delete(templateEmailReportDemandeClientClientInjoignable);
            }

            @ApiOperation("Deletes a templateEmailReportDemandeClientClientInjoignable by id")
            @DeleteMapping("/id/{id}")
            public int deleteById(@PathVariable Long id){
            return templateEmailReportDemandeClientClientInjoignableService.deleteById(id);
            }


            }
