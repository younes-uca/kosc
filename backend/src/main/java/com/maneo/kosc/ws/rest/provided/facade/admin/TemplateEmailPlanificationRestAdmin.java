package com.maneo.kosc.ws.rest.provided.facade.admin;

import com.maneo.kosc.service.admin.facade.TemplateEmailPlanificationAdminService;

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
import com.maneo.kosc.bean.TemplateEmailPlanification;
import com.maneo.kosc.ws.rest.provided.converter.TemplateEmailPlanificationConverter;
import com.maneo.kosc.ws.rest.provided.vo.TemplateEmailPlanificationVo;

@Api("Manages templateEmailPlanification services")
@RestController
@RequestMapping("api/admin/templateEmailPlanification")
public class TemplateEmailPlanificationRestAdmin {

    @Autowired
    private TemplateEmailPlanificationAdminService templateEmailPlanificationService;

    @Autowired
    private TemplateEmailPlanificationConverter templateEmailPlanificationConverter;


    @ApiOperation("Updates the specified  templateEmailPlanification")
    @PutMapping("/")
    public TemplateEmailPlanificationVo update(@RequestBody TemplateEmailPlanificationVo templateEmailPlanificationVo) {
        TemplateEmailPlanification templateEmailPlanification = templateEmailPlanificationConverter.toItem(templateEmailPlanificationVo);
        templateEmailPlanification = templateEmailPlanificationService.update(templateEmailPlanification);
        return templateEmailPlanificationConverter.toVo(templateEmailPlanification);
    }

    @ApiOperation("Finds a list of all templateEmailPlanifications")
    @GetMapping("/")
    public List<TemplateEmailPlanificationVo> findAll() {
        return templateEmailPlanificationConverter.toVo(templateEmailPlanificationService.findAll());
    }

    @ApiOperation("Finds a templateEmailPlanification with associated lists by id")
    @GetMapping("/detail/id/{id}")
    public TemplateEmailPlanificationVo findByIdWithAssociatedList(@PathVariable Long id) {
        return templateEmailPlanificationConverter.toVo(templateEmailPlanificationService.findByIdWithAssociatedList(id));
    }

    @ApiOperation("Search templateEmailPlanification by a specific criteria")
    @PostMapping("/search")
    public List<TemplateEmailPlanificationVo> findByCriteria(@RequestBody TemplateEmailPlanificationVo templateEmailPlanificationVo) {
        return templateEmailPlanificationConverter.toVo(templateEmailPlanificationService.findByCriteria(templateEmailPlanificationVo));
    }

    @ApiOperation("Finds a templateEmailPlanification by id")
    @GetMapping("/id/{id}")
    public TemplateEmailPlanificationVo findById(@PathVariable Long id) {
        return templateEmailPlanificationConverter.toVo(templateEmailPlanificationService.findById(id));
    }

    @ApiOperation("Saves the specified  templateEmailPlanification")
    @PostMapping("/")
    public TemplateEmailPlanificationVo save(@RequestBody TemplateEmailPlanificationVo templateEmailPlanificationVo) {
        TemplateEmailPlanification templateEmailPlanification = templateEmailPlanificationConverter.toItem(templateEmailPlanificationVo);
        templateEmailPlanification = templateEmailPlanificationService.save(templateEmailPlanification);
        return templateEmailPlanificationConverter.toVo(templateEmailPlanification);
    }

    @ApiOperation("Delete the specified templateEmailPlanification")
    @DeleteMapping("/")
    public int delete(@RequestBody TemplateEmailPlanificationVo templateEmailPlanificationVo) {
        TemplateEmailPlanification templateEmailPlanification = templateEmailPlanificationConverter.toItem(templateEmailPlanificationVo);
        return templateEmailPlanificationService.delete(templateEmailPlanification);
    }

    @ApiOperation("Deletes a templateEmailPlanification by id")
    @DeleteMapping("/id/{id}")
    public int deleteById(@PathVariable Long id) {
        return templateEmailPlanificationService.deleteById(id);
    }


}
