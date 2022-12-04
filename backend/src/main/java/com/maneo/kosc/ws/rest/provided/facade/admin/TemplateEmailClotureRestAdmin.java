package com.maneo.kosc.ws.rest.provided.facade.admin;

import com.maneo.kosc.service.admin.facade.TemplateEmailClotureAdminService;

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
import com.maneo.kosc.bean.template.TemplateEmailCloture;
import com.maneo.kosc.ws.rest.provided.converter.TemplateEmailClotureConverter;
import com.maneo.kosc.ws.rest.provided.vo.TemplateEmailClotureVo;

@Api("Manages templateEmailCloture services")
@RestController
@RequestMapping("api/admin/templateEmailCloture")
public class TemplateEmailClotureRestAdmin {

    @Autowired
    private TemplateEmailClotureAdminService templateEmailClotureService;

    @Autowired
    private TemplateEmailClotureConverter templateEmailClotureConverter;


    @ApiOperation("Updates the specified  templateEmailCloture")
    @PutMapping("/")
    public TemplateEmailClotureVo update(@RequestBody TemplateEmailClotureVo templateEmailClotureVo) {
        TemplateEmailCloture templateEmailCloture = templateEmailClotureConverter.toItem(templateEmailClotureVo);
        templateEmailCloture = templateEmailClotureService.update(templateEmailCloture);
        return templateEmailClotureConverter.toVo(templateEmailCloture);
    }

    @ApiOperation("Finds a list of all templateEmailClotures")
    @GetMapping("/")
    public List<TemplateEmailClotureVo> findAll() {
        return templateEmailClotureConverter.toVo(templateEmailClotureService.findAll());
    }

    @ApiOperation("Finds a templateEmailCloture with associated lists by id")
    @GetMapping("/detail/id/{id}")
    public TemplateEmailClotureVo findByIdWithAssociatedList(@PathVariable Long id) {
        return templateEmailClotureConverter.toVo(templateEmailClotureService.findByIdWithAssociatedList(id));
    }

    @ApiOperation("Search templateEmailCloture by a specific criteria")
    @PostMapping("/search")
    public List<TemplateEmailClotureVo> findByCriteria(@RequestBody TemplateEmailClotureVo templateEmailClotureVo) {
        return templateEmailClotureConverter.toVo(templateEmailClotureService.findByCriteria(templateEmailClotureVo));
    }

    @ApiOperation("Finds a templateEmailCloture by id")
    @GetMapping("/id/{id}")
    public TemplateEmailClotureVo findById(@PathVariable Long id) {
        return templateEmailClotureConverter.toVo(templateEmailClotureService.findById(id));
    }

    @ApiOperation("Saves the specified  templateEmailCloture")
    @PostMapping("/")
    public TemplateEmailClotureVo save(@RequestBody TemplateEmailClotureVo templateEmailClotureVo) {
        TemplateEmailCloture templateEmailCloture = templateEmailClotureConverter.toItem(templateEmailClotureVo);
        templateEmailCloture = templateEmailClotureService.save(templateEmailCloture);
        return templateEmailClotureConverter.toVo(templateEmailCloture);
    }

    @ApiOperation("Delete the specified templateEmailCloture")
    @DeleteMapping("/")
    public int delete(@RequestBody TemplateEmailClotureVo templateEmailClotureVo) {
        TemplateEmailCloture templateEmailCloture = templateEmailClotureConverter.toItem(templateEmailClotureVo);
        return templateEmailClotureService.delete(templateEmailCloture);
    }

    @ApiOperation("Deletes a templateEmailCloture by id")
    @DeleteMapping("/id/{id}")
    public int deleteById(@PathVariable Long id) {
        return templateEmailClotureService.deleteById(id);
    }


}
