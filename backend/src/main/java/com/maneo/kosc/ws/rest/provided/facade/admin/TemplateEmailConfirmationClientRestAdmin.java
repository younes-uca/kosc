package com.maneo.kosc.ws.rest.provided.facade.admin;

import com.maneo.kosc.service.admin.facade.TemplateEmailConfirmationClientAdminService;

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
import com.maneo.kosc.bean.template.TemplateEmailConfirmationClient;
import com.maneo.kosc.ws.rest.provided.converter.TemplateEmailConfirmationClientConverter;
import com.maneo.kosc.ws.rest.provided.vo.TemplateEmailConfirmationClientVo;

@Api("Manages templateEmailConfirmationClient services")
@RestController
@RequestMapping("api/admin/templateEmailConfirmationClient")
public class TemplateEmailConfirmationClientRestAdmin {

    @Autowired
    private TemplateEmailConfirmationClientAdminService templateEmailConfirmationClientService;

    @Autowired
    private TemplateEmailConfirmationClientConverter templateEmailConfirmationClientConverter;


    @ApiOperation("Updates the specified  templateEmailConfirmationClient")
    @PutMapping("/")
    public TemplateEmailConfirmationClientVo update(@RequestBody TemplateEmailConfirmationClientVo templateEmailConfirmationClientVo) {
        TemplateEmailConfirmationClient templateEmailConfirmationClient = templateEmailConfirmationClientConverter.toItem(templateEmailConfirmationClientVo);
        templateEmailConfirmationClient = templateEmailConfirmationClientService.update(templateEmailConfirmationClient);
        return templateEmailConfirmationClientConverter.toVo(templateEmailConfirmationClient);
    }

    @ApiOperation("Finds a list of all templateEmailConfirmationClients")
    @GetMapping("/")
    public List<TemplateEmailConfirmationClientVo> findAll() {
        return templateEmailConfirmationClientConverter.toVo(templateEmailConfirmationClientService.findAll());
    }

    @ApiOperation("Finds a templateEmailConfirmationClient with associated lists by id")
    @GetMapping("/detail/id/{id}")
    public TemplateEmailConfirmationClientVo findByIdWithAssociatedList(@PathVariable Long id) {
        return templateEmailConfirmationClientConverter.toVo(templateEmailConfirmationClientService.findByIdWithAssociatedList(id));
    }

    @ApiOperation("Search templateEmailConfirmationClient by a specific criteria")
    @PostMapping("/search")
    public List<TemplateEmailConfirmationClientVo> findByCriteria(@RequestBody TemplateEmailConfirmationClientVo templateEmailConfirmationClientVo) {
        return templateEmailConfirmationClientConverter.toVo(templateEmailConfirmationClientService.findByCriteria(templateEmailConfirmationClientVo));
    }

    @ApiOperation("Finds a templateEmailConfirmationClient by id")
    @GetMapping("/id/{id}")
    public TemplateEmailConfirmationClientVo findById(@PathVariable Long id) {
        return templateEmailConfirmationClientConverter.toVo(templateEmailConfirmationClientService.findById(id));
    }

    @ApiOperation("Saves the specified  templateEmailConfirmationClient")
    @PostMapping("/")
    public TemplateEmailConfirmationClientVo save(@RequestBody TemplateEmailConfirmationClientVo templateEmailConfirmationClientVo) {
        TemplateEmailConfirmationClient templateEmailConfirmationClient = templateEmailConfirmationClientConverter.toItem(templateEmailConfirmationClientVo);
        templateEmailConfirmationClient = templateEmailConfirmationClientService.save(templateEmailConfirmationClient);
        return templateEmailConfirmationClientConverter.toVo(templateEmailConfirmationClient);
    }

    @ApiOperation("Delete the specified templateEmailConfirmationClient")
    @DeleteMapping("/")
    public int delete(@RequestBody TemplateEmailConfirmationClientVo templateEmailConfirmationClientVo) {
        TemplateEmailConfirmationClient templateEmailConfirmationClient = templateEmailConfirmationClientConverter.toItem(templateEmailConfirmationClientVo);
        return templateEmailConfirmationClientService.delete(templateEmailConfirmationClient);
    }

    @ApiOperation("Deletes a templateEmailConfirmationClient by id")
    @DeleteMapping("/id/{id}")
    public int deleteById(@PathVariable Long id) {
        return templateEmailConfirmationClientService.deleteById(id);
    }


}
