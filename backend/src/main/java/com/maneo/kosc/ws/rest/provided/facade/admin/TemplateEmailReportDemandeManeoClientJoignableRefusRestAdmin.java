package com.maneo.kosc.ws.rest.provided.facade.admin;

import com.maneo.kosc.service.admin.facade.TemplateEmailReportDemandeManeoClientJoignableRefusAdminService;

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
import com.maneo.kosc.bean.TemplateEmailReportDemandeManeoClientJoignableRefus;
import com.maneo.kosc.ws.rest.provided.converter.TemplateEmailReportDemandeManeoClientJoignableRefusConverter;
import com.maneo.kosc.ws.rest.provided.vo.TemplateEmailReportDemandeManeoClientJoignableRefusVo;

@Api("Manages templateEmailReportDemandeManeoClientJoignableRefus services")
@RestController
@RequestMapping("api/admin/templateEmailReportDemandeManeoClientJoignableRefus")
public class TemplateEmailReportDemandeManeoClientJoignableRefusRestAdmin {

@Autowired
private TemplateEmailReportDemandeManeoClientJoignableRefusAdminService templateEmailReportDemandeManeoClientJoignableRefusService;

@Autowired
private TemplateEmailReportDemandeManeoClientJoignableRefusConverter templateEmailReportDemandeManeoClientJoignableRefusConverter;


            @ApiOperation("Updates the specified  templateEmailReportDemandeManeoClientJoignableRefus")
            @PutMapping("/")
            public  TemplateEmailReportDemandeManeoClientJoignableRefusVo update(@RequestBody  TemplateEmailReportDemandeManeoClientJoignableRefusVo  templateEmailReportDemandeManeoClientJoignableRefusVo){
            TemplateEmailReportDemandeManeoClientJoignableRefus templateEmailReportDemandeManeoClientJoignableRefus = templateEmailReportDemandeManeoClientJoignableRefusConverter.toItem(templateEmailReportDemandeManeoClientJoignableRefusVo);
            templateEmailReportDemandeManeoClientJoignableRefus = templateEmailReportDemandeManeoClientJoignableRefusService.update(templateEmailReportDemandeManeoClientJoignableRefus);
            return templateEmailReportDemandeManeoClientJoignableRefusConverter.toVo(templateEmailReportDemandeManeoClientJoignableRefus);
            }

    @ApiOperation("Finds a list of all templateEmailReportDemandeManeoClientJoignableRefuss")
    @GetMapping("/")
    public List<TemplateEmailReportDemandeManeoClientJoignableRefusVo> findAll(){
        return templateEmailReportDemandeManeoClientJoignableRefusConverter.toVo(templateEmailReportDemandeManeoClientJoignableRefusService.findAll());
    }

    @ApiOperation("Finds a templateEmailReportDemandeManeoClientJoignableRefus with associated lists by id")
    @GetMapping("/detail/id/{id}")
    public TemplateEmailReportDemandeManeoClientJoignableRefusVo findByIdWithAssociatedList(@PathVariable Long id){
    return templateEmailReportDemandeManeoClientJoignableRefusConverter.toVo(templateEmailReportDemandeManeoClientJoignableRefusService.findByIdWithAssociatedList(id));
    }

    @ApiOperation("Search templateEmailReportDemandeManeoClientJoignableRefus by a specific criteria")
    @PostMapping("/search")
    public List<TemplateEmailReportDemandeManeoClientJoignableRefusVo> findByCriteria(@RequestBody TemplateEmailReportDemandeManeoClientJoignableRefusVo templateEmailReportDemandeManeoClientJoignableRefusVo){
        return templateEmailReportDemandeManeoClientJoignableRefusConverter.toVo(templateEmailReportDemandeManeoClientJoignableRefusService.findByCriteria(templateEmailReportDemandeManeoClientJoignableRefusVo));
        }

            @ApiOperation("Finds a templateEmailReportDemandeManeoClientJoignableRefus by id")
            @GetMapping("/id/{id}")
            public TemplateEmailReportDemandeManeoClientJoignableRefusVo findById(@PathVariable Long id){
            return templateEmailReportDemandeManeoClientJoignableRefusConverter.toVo(templateEmailReportDemandeManeoClientJoignableRefusService.findById(id));
            }

            @ApiOperation("Saves the specified  templateEmailReportDemandeManeoClientJoignableRefus")
            @PostMapping("/")
            public TemplateEmailReportDemandeManeoClientJoignableRefusVo save(@RequestBody TemplateEmailReportDemandeManeoClientJoignableRefusVo templateEmailReportDemandeManeoClientJoignableRefusVo){
            TemplateEmailReportDemandeManeoClientJoignableRefus templateEmailReportDemandeManeoClientJoignableRefus = templateEmailReportDemandeManeoClientJoignableRefusConverter.toItem(templateEmailReportDemandeManeoClientJoignableRefusVo);
            templateEmailReportDemandeManeoClientJoignableRefus = templateEmailReportDemandeManeoClientJoignableRefusService.save(templateEmailReportDemandeManeoClientJoignableRefus);
            return templateEmailReportDemandeManeoClientJoignableRefusConverter.toVo(templateEmailReportDemandeManeoClientJoignableRefus);
            }

            @ApiOperation("Delete the specified templateEmailReportDemandeManeoClientJoignableRefus")
            @DeleteMapping("/")
            public int delete(@RequestBody TemplateEmailReportDemandeManeoClientJoignableRefusVo templateEmailReportDemandeManeoClientJoignableRefusVo){
            TemplateEmailReportDemandeManeoClientJoignableRefus templateEmailReportDemandeManeoClientJoignableRefus = templateEmailReportDemandeManeoClientJoignableRefusConverter.toItem(templateEmailReportDemandeManeoClientJoignableRefusVo);
            return templateEmailReportDemandeManeoClientJoignableRefusService.delete(templateEmailReportDemandeManeoClientJoignableRefus);
            }

            @ApiOperation("Deletes a templateEmailReportDemandeManeoClientJoignableRefus by id")
            @DeleteMapping("/id/{id}")
            public int deleteById(@PathVariable Long id){
            return templateEmailReportDemandeManeoClientJoignableRefusService.deleteById(id);
            }


            }
