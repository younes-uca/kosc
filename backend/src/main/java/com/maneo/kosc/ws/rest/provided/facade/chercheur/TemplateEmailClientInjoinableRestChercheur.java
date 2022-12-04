package com.maneo.kosc.ws.rest.provided.facade.chercheur;

import com.maneo.kosc.service.chercheur.facade.TemplateEmailClientInjoinableChercheurService;

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
import com.maneo.kosc.bean.template.TemplateEmailClientInjoinable;
import com.maneo.kosc.ws.rest.provided.converter.template.TemplateEmailClientInjoinableConverter;
import com.maneo.kosc.ws.rest.provided.vo.template.TemplateEmailClientInjoinableVo;

@Api("Manages templateEmailClientInjoinable services")
@RestController
@RequestMapping("api/chercheur/templateEmailClientInjoinable")
public class TemplateEmailClientInjoinableRestChercheur {

    @Autowired
    private TemplateEmailClientInjoinableChercheurService templateEmailClientInjoinableService;

    @Autowired
    private TemplateEmailClientInjoinableConverter templateEmailClientInjoinableConverter;


    @ApiOperation("Updates the specified  templateEmailClientInjoinable")
    @PutMapping("/")
    public TemplateEmailClientInjoinableVo update(@RequestBody TemplateEmailClientInjoinableVo templateEmailClientInjoinableVo) {
        TemplateEmailClientInjoinable templateEmailClientInjoinable = templateEmailClientInjoinableConverter.toItem(templateEmailClientInjoinableVo);
        templateEmailClientInjoinable = templateEmailClientInjoinableService.update(templateEmailClientInjoinable);
        return templateEmailClientInjoinableConverter.toVo(templateEmailClientInjoinable);
    }

    @ApiOperation("Finds a list of all templateEmailClientInjoinables")
    @GetMapping("/")
    public List<TemplateEmailClientInjoinableVo> findAll() {
        return templateEmailClientInjoinableConverter.toVo(templateEmailClientInjoinableService.findAll());
    }

    @ApiOperation("Finds a templateEmailClientInjoinable with associated lists by id")
    @GetMapping("/detail/id/{id}")
    public TemplateEmailClientInjoinableVo findByIdWithAssociatedList(@PathVariable Long id) {
        return templateEmailClientInjoinableConverter.toVo(templateEmailClientInjoinableService.findByIdWithAssociatedList(id));
    }

    @ApiOperation("Search templateEmailClientInjoinable by a specific criteria")
    @PostMapping("/search")
    public List<TemplateEmailClientInjoinableVo> findByCriteria(@RequestBody TemplateEmailClientInjoinableVo templateEmailClientInjoinableVo) {
        return templateEmailClientInjoinableConverter.toVo(templateEmailClientInjoinableService.findByCriteria(templateEmailClientInjoinableVo));
    }

    @ApiOperation("Finds a templateEmailClientInjoinable by id")
    @GetMapping("/id/{id}")
    public TemplateEmailClientInjoinableVo findById(@PathVariable Long id) {
        return templateEmailClientInjoinableConverter.toVo(templateEmailClientInjoinableService.findById(id));
    }

    @ApiOperation("Saves the specified  templateEmailClientInjoinable")
    @PostMapping("/")
    public TemplateEmailClientInjoinableVo save(@RequestBody TemplateEmailClientInjoinableVo templateEmailClientInjoinableVo) {
        TemplateEmailClientInjoinable templateEmailClientInjoinable = templateEmailClientInjoinableConverter.toItem(templateEmailClientInjoinableVo);
        templateEmailClientInjoinable = templateEmailClientInjoinableService.save(templateEmailClientInjoinable);
        return templateEmailClientInjoinableConverter.toVo(templateEmailClientInjoinable);
    }

    @ApiOperation("Delete the specified templateEmailClientInjoinable")
    @DeleteMapping("/")
    public int delete(@RequestBody TemplateEmailClientInjoinableVo templateEmailClientInjoinableVo) {
        TemplateEmailClientInjoinable templateEmailClientInjoinable = templateEmailClientInjoinableConverter.toItem(templateEmailClientInjoinableVo);
        return templateEmailClientInjoinableService.delete(templateEmailClientInjoinable);
    }

    @ApiOperation("Deletes a templateEmailClientInjoinable by id")
    @DeleteMapping("/id/{id}")
    public int deleteById(@PathVariable Long id) {
        return templateEmailClientInjoinableService.deleteById(id);
    }


}
