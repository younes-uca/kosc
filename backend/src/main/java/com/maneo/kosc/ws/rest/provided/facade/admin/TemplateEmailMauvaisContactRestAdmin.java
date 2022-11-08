package com.maneo.kosc.ws.rest.provided.facade.admin;

import com.maneo.kosc.service.admin.facade.TemplateEmailMauvaisContactAdminService;

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
import com.maneo.kosc.bean.TemplateEmailMauvaisContact;
import com.maneo.kosc.ws.rest.provided.converter.TemplateEmailMauvaisContactConverter;
import com.maneo.kosc.ws.rest.provided.vo.TemplateEmailMauvaisContactVo;

@Api("Manages templateEmailMauvaisContact services")
@RestController
@RequestMapping("api/admin/templateEmailMauvaisContact")
public class TemplateEmailMauvaisContactRestAdmin {

    @Autowired
    private TemplateEmailMauvaisContactAdminService templateEmailMauvaisContactService;

    @Autowired
    private TemplateEmailMauvaisContactConverter templateEmailMauvaisContactConverter;


    @ApiOperation("Updates the specified  templateEmailMauvaisContact")
    @PutMapping("/")
    public TemplateEmailMauvaisContactVo update(@RequestBody TemplateEmailMauvaisContactVo templateEmailMauvaisContactVo) {
        TemplateEmailMauvaisContact templateEmailMauvaisContact = templateEmailMauvaisContactConverter.toItem(templateEmailMauvaisContactVo);
        templateEmailMauvaisContact = templateEmailMauvaisContactService.update(templateEmailMauvaisContact);
        return templateEmailMauvaisContactConverter.toVo(templateEmailMauvaisContact);
    }

    @ApiOperation("Finds a list of all templateEmailMauvaisContacts")
    @GetMapping("/")
    public List<TemplateEmailMauvaisContactVo> findAll() {
        return templateEmailMauvaisContactConverter.toVo(templateEmailMauvaisContactService.findAll());
    }

    @ApiOperation("Finds a templateEmailMauvaisContact with associated lists by id")
    @GetMapping("/detail/id/{id}")
    public TemplateEmailMauvaisContactVo findByIdWithAssociatedList(@PathVariable Long id) {
        return templateEmailMauvaisContactConverter.toVo(templateEmailMauvaisContactService.findByIdWithAssociatedList(id));
    }

    @ApiOperation("Search templateEmailMauvaisContact by a specific criteria")
    @PostMapping("/search")
    public List<TemplateEmailMauvaisContactVo> findByCriteria(@RequestBody TemplateEmailMauvaisContactVo templateEmailMauvaisContactVo) {
        return templateEmailMauvaisContactConverter.toVo(templateEmailMauvaisContactService.findByCriteria(templateEmailMauvaisContactVo));
    }

    @ApiOperation("Finds a templateEmailMauvaisContact by id")
    @GetMapping("/id/{id}")
    public TemplateEmailMauvaisContactVo findById(@PathVariable Long id) {
        return templateEmailMauvaisContactConverter.toVo(templateEmailMauvaisContactService.findById(id));
    }

    @ApiOperation("Saves the specified  templateEmailMauvaisContact")
    @PostMapping("/")
    public TemplateEmailMauvaisContactVo save(@RequestBody TemplateEmailMauvaisContactVo templateEmailMauvaisContactVo) {
        TemplateEmailMauvaisContact templateEmailMauvaisContact = templateEmailMauvaisContactConverter.toItem(templateEmailMauvaisContactVo);
        templateEmailMauvaisContact = templateEmailMauvaisContactService.save(templateEmailMauvaisContact);
        return templateEmailMauvaisContactConverter.toVo(templateEmailMauvaisContact);
    }

    @ApiOperation("Delete the specified templateEmailMauvaisContact")
    @DeleteMapping("/")
    public int delete(@RequestBody TemplateEmailMauvaisContactVo templateEmailMauvaisContactVo) {
        TemplateEmailMauvaisContact templateEmailMauvaisContact = templateEmailMauvaisContactConverter.toItem(templateEmailMauvaisContactVo);
        return templateEmailMauvaisContactService.delete(templateEmailMauvaisContact);
    }

    @ApiOperation("Deletes a templateEmailMauvaisContact by id")
    @DeleteMapping("/id/{id}")
    public int deleteById(@PathVariable Long id) {
        return templateEmailMauvaisContactService.deleteById(id);
    }


}
