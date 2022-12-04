package com.maneo.kosc.ws.rest.provided.vo.technicien;


public class DepartementVo {

    private String id;
    private String libelle;
    private String code;


    private RegionVo regionVo;


    public DepartementVo() {
        super();
    }

    public String getId() {
        return this.id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getLibelle() {
        return this.libelle;
    }

    public void setLibelle(String libelle) {
        this.libelle = libelle;
    }

    public String getCode() {
        return this.code;
    }

    public void setCode(String code) {
        this.code = code;
    }


    public RegionVo getRegionVo() {
        return this.regionVo;
    }

    public void setRegionVo(RegionVo regionVo) {
        this.regionVo = regionVo;
    }


}
