package com.maneo.kosc.ws.rest.provided.facade.admin.template;

import com.maneo.kosc.service.admin.facade.template.TemplateEmailReportDemandeManeoClientJoignableAccepteAdminService;

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
import com.maneo.kosc.bean.template.TemplateEmailReportDemandeManeoClientJoignableAccepte;
import com.maneo.kosc.ws.rest.provided.converter.template.TemplateEmailReportDemandeManeoClientJoignableAccepteConverter;
import com.maneo.kosc.ws.rest.provided.vo.template.TemplateEmailReportDemandeManeoClientJoignableAccepteVo;

@Api("Manages templateEmailReportDemandeManeoClientJoignableAccepte services")
@RestController
@RequestMapping("api/admin/templateEmailReportDemandeManeoClientJoignableAccepte")
public class TemplateEmailReportDemandeManeoClientJoignableAccepteRestAdmin {

@Autowired
private TemplateEmailReportDemandeManeoClientJoignableAccepteAdminService templateEmailReportDemandeManeoClientJoignableAccepteService;

@Autowired
private TemplateEmailReportDemandeManeoClientJoignableAccepteConverter templateEmailReportDemandeManeoClientJoignableAccepteConverter;


            @ApiOperation("Updates the specified  templateEmailReportDemandeManeoClientJoignableAccepte")
            @PutMapping("/")
            public  TemplateEmailReportDemandeManeoClientJoignableAccepteVo update(@RequestBody  TemplateEmailReportDemandeManeoClientJoignableAccepteVo  templateEmailReportDemandeManeoClientJoignableAccepteVo){
            TemplateEmailReportDemandeManeoClientJoignableAccepte templateEmailReportDemandeManeoClientJoignableAccepte = templateEmailReportDemandeManeoClientJoignableAccepteConverter.toItem(templateEmailReportDemandeManeoClientJoignableAccepteVo);
            templateEmailReportDemandeManeoClientJoignableAccepte = templateEmailReportDemandeManeoClientJoignableAccepteService.update(templateEmailReportDemandeManeoClientJoignableAccepte);
            return templateEmailReportDemandeManeoClientJoignableAccepteConverter.toVo(templateEmailReportDemandeManeoClientJoignableAccepte);
            }

    @ApiOperation("Finds a list of all templateEmailReportDemandeManeoClientJoignableAcceptes")
    @GetMapping("/")
    public List<TemplateEmailReportDemandeManeoClientJoignableAccepteVo> findAll(){
        return templateEmailReportDemandeManeoClientJoignableAccepteConverter.toVo(templateEmailReportDemandeManeoClientJoignableAccepteService.findAll());
    }

    @ApiOperation("Finds a templateEmailReportDemandeManeoClientJoignableAccepte with associated lists by id")
    @GetMapping("/detail/id/{id}")
    public TemplateEmailReportDemandeManeoClientJoignableAccepteVo findByIdWithAssociatedList(@PathVariable Long id){
    return templateEmailReportDemandeManeoClientJoignableAccepteConverter.toVo(templateEmailReportDemandeManeoClientJoignableAccepteService.findByIdWithAssociatedList(id));
    }

    @ApiOperation("Search templateEmailReportDemandeManeoClientJoignableAccepte by a specific criteria")
    @PostMapping("/search")
    public List<TemplateEmailReportDemandeManeoClientJoignableAccepteVo> findByCriteria(@RequestBody TemplateEmailReportDemandeManeoClientJoignableAccepteVo templateEmailReportDemandeManeoClientJoignableAccepteVo){
        return templateEmailReportDemandeManeoClientJoignableAccepteConverter.toVo(templateEmailReportDemandeManeoClientJoignableAccepteService.findByCriteria(templateEmailReportDemandeManeoClientJoignableAccepteVo));
        }

            @ApiOperation("Finds a templateEmailReportDemandeManeoClientJoignableAccepte by id")
            @GetMapping("/id/{id}")
            public TemplateEmailReportDemandeManeoClientJoignableAccepteVo findById(@PathVariable Long id){
            return templateEmailReportDemandeManeoClientJoignableAccepteConverter.toVo(templateEmailReportDemandeManeoClientJoignableAccepteService.findById(id));
            }

            @ApiOperation("Saves the specified  templateEmailReportDemandeManeoClientJoignableAccepte")
            @PostMapping("/")
            public TemplateEmailReportDemandeManeoClientJoignableAccepteVo save(@RequestBody TemplateEmailReportDemandeManeoClientJoignableAccepteVo templateEmailReportDemandeManeoClientJoignableAccepteVo){
            TemplateEmailReportDemandeManeoClientJoignableAccepte templateEmailReportDemandeManeoClientJoignableAccepte = templateEmailReportDemandeManeoClientJoignableAccepteConverter.toItem(templateEmailReportDemandeManeoClientJoignableAccepteVo);
            templateEmailReportDemandeManeoClientJoignableAccepte = templateEmailReportDemandeManeoClientJoignableAccepteService.save(templateEmailReportDemandeManeoClientJoignableAccepte);
            return templateEmailReportDemandeManeoClientJoignableAccepteConverter.toVo(templateEmailReportDemandeManeoClientJoignableAccepte);
            }

            @ApiOperation("Delete the specified templateEmailReportDemandeManeoClientJoignableAccepte")
            @DeleteMapping("/")
            public int delete(@RequestBody TemplateEmailReportDemandeManeoClientJoignableAccepteVo templateEmailReportDemandeManeoClientJoignableAccepteVo){
            TemplateEmailReportDemandeManeoClientJoignableAccepte templateEmailReportDemandeManeoClientJoignableAccepte = templateEmailReportDemandeManeoClientJoignableAccepteConverter.toItem(templateEmailReportDemandeManeoClientJoignableAccepteVo);
            return templateEmailReportDemandeManeoClientJoignableAccepteService.delete(templateEmailReportDemandeManeoClientJoignableAccepte);
            }

            @ApiOperation("Deletes a templateEmailReportDemandeManeoClientJoignableAccepte by id")
            @DeleteMapping("/id/{id}")
            public int deleteById(@PathVariable Long id){
            return templateEmailReportDemandeManeoClientJoignableAccepteService.deleteById(id);
            }


            }
