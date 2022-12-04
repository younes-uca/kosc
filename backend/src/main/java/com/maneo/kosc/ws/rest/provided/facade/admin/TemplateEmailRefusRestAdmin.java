package com.maneo.kosc.ws.rest.provided.facade.admin;

import com.maneo.kosc.service.admin.facade.TemplateEmailRefusAdminService;

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
import com.maneo.kosc.bean.template.TemplateEmailRefus;
import com.maneo.kosc.ws.rest.provided.converter.TemplateEmailRefusConverter;
import com.maneo.kosc.ws.rest.provided.vo.TemplateEmailRefusVo;

@Api("Manages templateEmailRefus services")
@RestController
@RequestMapping("api/admin/templateEmailRefus")
public class TemplateEmailRefusRestAdmin {

    @Autowired
    private TemplateEmailRefusAdminService templateEmailRefusService;

    @Autowired
    private TemplateEmailRefusConverter templateEmailRefusConverter;


    @ApiOperation("Updates the specified  templateEmailRefus")
    @PutMapping("/")
    public TemplateEmailRefusVo update(@RequestBody TemplateEmailRefusVo templateEmailRefusVo) {
        TemplateEmailRefus templateEmailRefus = templateEmailRefusConverter.toItem(templateEmailRefusVo);
        templateEmailRefus = templateEmailRefusService.update(templateEmailRefus);
        return templateEmailRefusConverter.toVo(templateEmailRefus);
    }

    @ApiOperation("Finds a list of all templateEmailRefuss")
    @GetMapping("/")
    public List<TemplateEmailRefusVo> findAll() {
        return templateEmailRefusConverter.toVo(templateEmailRefusService.findAll());
    }

    @ApiOperation("Finds a templateEmailRefus with associated lists by id")
    @GetMapping("/detail/id/{id}")
    public TemplateEmailRefusVo findByIdWithAssociatedList(@PathVariable Long id) {
        return templateEmailRefusConverter.toVo(templateEmailRefusService.findByIdWithAssociatedList(id));
    }

    @ApiOperation("Search templateEmailRefus by a specific criteria")
    @PostMapping("/search")
    public List<TemplateEmailRefusVo> findByCriteria(@RequestBody TemplateEmailRefusVo templateEmailRefusVo) {
        return templateEmailRefusConverter.toVo(templateEmailRefusService.findByCriteria(templateEmailRefusVo));
    }

    @ApiOperation("Finds a templateEmailRefus by id")
    @GetMapping("/id/{id}")
    public TemplateEmailRefusVo findById(@PathVariable Long id) {
        return templateEmailRefusConverter.toVo(templateEmailRefusService.findById(id));
    }

    @ApiOperation("Saves the specified  templateEmailRefus")
    @PostMapping("/")
    public TemplateEmailRefusVo save(@RequestBody TemplateEmailRefusVo templateEmailRefusVo) {
        TemplateEmailRefus templateEmailRefus = templateEmailRefusConverter.toItem(templateEmailRefusVo);
        templateEmailRefus = templateEmailRefusService.save(templateEmailRefus);
        return templateEmailRefusConverter.toVo(templateEmailRefus);
    }

    @ApiOperation("Delete the specified templateEmailRefus")
    @DeleteMapping("/")
    public int delete(@RequestBody TemplateEmailRefusVo templateEmailRefusVo) {
        TemplateEmailRefus templateEmailRefus = templateEmailRefusConverter.toItem(templateEmailRefusVo);
        return templateEmailRefusService.delete(templateEmailRefus);
    }

    @ApiOperation("Deletes a templateEmailRefus by id")
    @DeleteMapping("/id/{id}")
    public int deleteById(@PathVariable Long id) {
        return templateEmailRefusService.deleteById(id);
    }


}
