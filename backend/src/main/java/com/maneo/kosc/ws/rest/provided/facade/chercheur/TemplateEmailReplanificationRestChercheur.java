package com.maneo.kosc.ws.rest.provided.facade.chercheur;

import com.maneo.kosc.service.chercheur.facade.TemplateEmailReplanificationChercheurService;

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
import com.maneo.kosc.bean.TemplateEmailReplanification;
import com.maneo.kosc.ws.rest.provided.converter.TemplateEmailReplanificationConverter;
import com.maneo.kosc.ws.rest.provided.vo.TemplateEmailReplanificationVo;

@Api("Manages templateEmailReplanification services")
@RestController
@RequestMapping("api/chercheur/templateEmailReplanification")
public class TemplateEmailReplanificationRestChercheur {

    @Autowired
    private TemplateEmailReplanificationChercheurService templateEmailReplanificationService;

    @Autowired
    private TemplateEmailReplanificationConverter templateEmailReplanificationConverter;


    @ApiOperation("Updates the specified  templateEmailReplanification")
    @PutMapping("/")
    public TemplateEmailReplanificationVo update(@RequestBody TemplateEmailReplanificationVo templateEmailReplanificationVo) {
        TemplateEmailReplanification templateEmailReplanification = templateEmailReplanificationConverter.toItem(templateEmailReplanificationVo);
        templateEmailReplanification = templateEmailReplanificationService.update(templateEmailReplanification);
        return templateEmailReplanificationConverter.toVo(templateEmailReplanification);
    }

    @ApiOperation("Finds a list of all templateEmailReplanifications")
    @GetMapping("/")
    public List<TemplateEmailReplanificationVo> findAll() {
        return templateEmailReplanificationConverter.toVo(templateEmailReplanificationService.findAll());
    }

    @ApiOperation("Finds a templateEmailReplanification with associated lists by id")
    @GetMapping("/detail/id/{id}")
    public TemplateEmailReplanificationVo findByIdWithAssociatedList(@PathVariable Long id) {
        return templateEmailReplanificationConverter.toVo(templateEmailReplanificationService.findByIdWithAssociatedList(id));
    }

    @ApiOperation("Search templateEmailReplanification by a specific criteria")
    @PostMapping("/search")
    public List<TemplateEmailReplanificationVo> findByCriteria(@RequestBody TemplateEmailReplanificationVo templateEmailReplanificationVo) {
        return templateEmailReplanificationConverter.toVo(templateEmailReplanificationService.findByCriteria(templateEmailReplanificationVo));
    }

    @ApiOperation("Finds a templateEmailReplanification by id")
    @GetMapping("/id/{id}")
    public TemplateEmailReplanificationVo findById(@PathVariable Long id) {
        return templateEmailReplanificationConverter.toVo(templateEmailReplanificationService.findById(id));
    }

    @ApiOperation("Saves the specified  templateEmailReplanification")
    @PostMapping("/")
    public TemplateEmailReplanificationVo save(@RequestBody TemplateEmailReplanificationVo templateEmailReplanificationVo) {
        TemplateEmailReplanification templateEmailReplanification = templateEmailReplanificationConverter.toItem(templateEmailReplanificationVo);
        templateEmailReplanification = templateEmailReplanificationService.save(templateEmailReplanification);
        return templateEmailReplanificationConverter.toVo(templateEmailReplanification);
    }

    @ApiOperation("Delete the specified templateEmailReplanification")
    @DeleteMapping("/")
    public int delete(@RequestBody TemplateEmailReplanificationVo templateEmailReplanificationVo) {
        TemplateEmailReplanification templateEmailReplanification = templateEmailReplanificationConverter.toItem(templateEmailReplanificationVo);
        return templateEmailReplanificationService.delete(templateEmailReplanification);
    }

    @ApiOperation("Deletes a templateEmailReplanification by id")
    @DeleteMapping("/id/{id}")
    public int deleteById(@PathVariable Long id) {
        return templateEmailReplanificationService.deleteById(id);
    }


}
