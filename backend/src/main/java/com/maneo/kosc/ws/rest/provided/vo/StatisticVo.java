package com.maneo.kosc.ws.rest.provided.vo;

import com.maneo.kosc.bean.OrdreKosc;

import java.util.Date;

public class StatisticVo {
    private Long count;
    private Integer type;
    private Date submissionDate;


    private Long countLessThan24;
    private Long countCreaterThan24;
    private Long countCreaterThan48;

    public StatisticVo(Date submissionDate, Long countLessThan24, Long countCreaterThan24, Long countCreaterThan48) {
        this.submissionDate = submissionDate;
        this.countLessThan24 = countLessThan24;
        this.countCreaterThan24 = countCreaterThan24;
        this.countCreaterThan48 = countCreaterThan48;
    }


    public StatisticVo(Long countLessThan24, Long countCreaterThan24, Long countCreaterThan48) {
        this.countLessThan24 = countLessThan24;
        this.countCreaterThan24 = countCreaterThan24;
        this.countCreaterThan48 = countCreaterThan48;
    }

    public StatisticVo() {
    }




    public StatisticVo(Long count, Integer type, Date submissionDate) {
        this.count = count;
        this.type = type;
        this.submissionDate = submissionDate;
    }

    public Integer getType() {
        return type;
    }

    public void setType(Integer type) {
        this.type = type;
    }

    public Date getSubmissionDate() {
        return submissionDate;
    }

    public void setSubmissionDate(Date submissionDate) {
        this.submissionDate = submissionDate;
    }

    public Long getCount() {
        return count;
    }

    public void setCount(Long count) {
        this.count = count;
    }

    public Long getCountLessThan24() {
        return countLessThan24;
    }

    public void setCountLessThan24(Long countLessThan24) {
        this.countLessThan24 = countLessThan24;
    }

    public Long getCountCreaterThan24() {
        return countCreaterThan24;
    }

    public void setCountCreaterThan24(Long countCreaterThan24) {
        this.countCreaterThan24 = countCreaterThan24;
    }

    public Long getCountCreaterThan48() {
        return countCreaterThan48;
    }

    public void setCountCreaterThan48(Long countCreaterThan48) {
        this.countCreaterThan48 = countCreaterThan48;
    }

    @Override
    public String toString() {
        return "StatisticVo{" +
                "count=" + count +
                ", submissionDate=" + submissionDate +
                ", countLessThan24=" + countLessThan24 +
                ", countCreaterThan24=" + countCreaterThan24 +
                ", countCreaterThan48=" + countCreaterThan48 +
                '}';
    }
}
