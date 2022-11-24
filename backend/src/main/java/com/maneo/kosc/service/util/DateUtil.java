package com.maneo.kosc.service.util;


import java.sql.Timestamp;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.DayOfWeek;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.time.format.DateTimeFormatter;
import java.time.temporal.ChronoField;
import java.util.Calendar;
import java.util.Date;

public class DateUtil {

    public static String formateDate(Date date) {
        return formateDate("yyyy-MM-dd hh:mm:ss.SSS", date);
    }

    public static String formateDate(String pattern, Date date) {
        SimpleDateFormat simpleDateFormat = new SimpleDateFormat(pattern);
        if (date != null) {
            return simpleDateFormat.format(date);
        } else {
            return "";
        }
    }

    public static Date parse(String date) {
        if (date == null || date.isEmpty()) {
            return null;
        } else {
            try {
                SimpleDateFormat simpleDateFormat = new SimpleDateFormat("dd/MM/yyyy");
                return simpleDateFormat.parse(date);
            } catch (Exception ex) {
                return null;
            }
        }
    }


    public static Date parseTime(String date) {
        if (date == null || date.isEmpty()) {
            return null;
        } else {
            try {
                SimpleDateFormat simpleDateFormat = new SimpleDateFormat("yyyy-MM-dd");
                return simpleDateFormat.parse(date);
            } catch (Exception ex) {
                System.out.println(ex);
                return null;
            }
        }
    }
    public static Date parseTimestampUniversalFormat(String date) {
        try {
            SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd hh:mm:ss.SSS");
            date=date.replace("T"," ");
            date=date.replace("Z","");
            Date parsedDate = dateFormat.parse(date);
            Timestamp timestamp = new java.sql.Timestamp(parsedDate.getTime());
            return timestamp;
        } catch (Exception e) {
            return null;
        }
    }

    public static Date parseTimestamp(String date) {
        try {
            SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd hh:mm:ss.SSS");
            Date parsedDate = dateFormat.parse(date);
            Timestamp timestamp = new java.sql.Timestamp(parsedDate.getTime());
            return timestamp;
        } catch (Exception e) {
            return null;
        }
    }

    public static Timestamp parseTimestampDate(String date) {
        try {
            SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd hh:mm:ss.SSS");
            Date parsedDate = dateFormat.parse(date);
            Timestamp timestamp = new java.sql.Timestamp(parsedDate.getTime());
            return timestamp;
        } catch (Exception e) {
            return null;
        }
    }




    public static Date parseTimestamp(String date, String pattern) {
        try {
            SimpleDateFormat dateFormat = new SimpleDateFormat(pattern);
            Date parsedDate = dateFormat.parse(date);
            Timestamp timestamp = new java.sql.Timestamp(parsedDate.getTime());
            return timestamp;
        } catch (Exception e) {
            return null;
        }
    }

    public static java.sql.Date convertFormUtilToSql(java.util.Date date) {
        if (date != null) {
            return new java.sql.Date(date.getTime());
        } else {
            return null;
        }
    }

    public static java.sql.Timestamp convertFormUtilToTimestamp(java.util.Date date) {
        if (date != null) {
            return new java.sql.Timestamp(date.getTime());
        } else {
            return null;
        }
    }

    public static String now() {
        LocalDate todaysDate = LocalDate.now();
        String text = todaysDate.format(DateTimeFormatter.ofPattern("yyyy MM dd"));
        return text;
    }

    public static Date toDate(LocalDate localDate) {

        ZoneId defaultZoneId = ZoneId.systemDefault();
        Date date = Date.from(localDate.atStartOfDay(defaultZoneId).toInstant());

        return date;
    }

    public static Date getDemain(){
      return getNowPlusDay(1);
    }
    public static Date getApresDemain(){
        return getNowPlusDay(2);

    }
    public static Date getApresApresDemain(){
        return getNowPlusDay(3);
    }

    public static Date getApresApresApresDemain(){
        return getNowPlusDay(4);
    }


    private static Date getNowPlusDay(int day){
        Date today = new Date();
        Date result = new Date(today.getTime() + (1000 * 60 * 60 * 24 * day));

        return result;
    }

    public static long calculerDifference(Date date){
        if(date == null){
            return 0L;
        }
        return calculerDifference(new Date(), date);
    }
    public static long calculerDifference(Date startDate, Date endDate){

        //milliseconds
        long different =  startDate.getTime() - endDate.getTime();

        long secondsInMilli = 1000;
        long minutesInMilli = secondsInMilli * 60;
        long hoursInMilli = minutesInMilli * 60;
        long daysInMilli = hoursInMilli * 24;

        long elapsedDays = different / daysInMilli;
        different = (different % daysInMilli);

        long elapsedHours = elapsedDays * 24 + different / hoursInMilli;
        different =  different % hoursInMilli;

        long elapsedMinutes = different / minutesInMilli;
        different = different % minutesInMilli;

        long elapsedSeconds = different / secondsInMilli;

        return elapsedHours;

    }

//    public static long calculerDifference(Date startDate, Date endDate){
//
//
//        //milliseconds
//        long different =  startDate.getTime() - endDate.getTime();
//
//        long secondsInMilli = 1000;
//        long minutesInMilli = secondsInMilli * 60;
//        long hoursInMilli = minutesInMilli * 60;
//        long daysInMilli = hoursInMilli * 24;
//
//        long elapsedDays;
//        long elapsedHours ;
//
//
//
//
//        for (Date date = endDate; date.before(startDate); LocalDateTime.from(date.toInstant()).plusDays(1))  {
//            boolean cd = isWeekEnd(endDate);
//            if( cd == false ){
//                elapsedDays = different / daysInMilli;
//                different = (different % daysInMilli);

//                elapsedHours = elapsedDays * 24 + different / hoursInMilli;
//            } else {
//            }
//
//        }
//        return elapsedHours;
//    }

    public static boolean isWeekEnd(final Date date)
    {
        Calendar cal = Calendar.getInstance();
        cal.setTime(date);

        int day = cal.get(Calendar.DAY_OF_WEEK);
        return day == Calendar.SUNDAY || day == Calendar.SATURDAY;
    }
}

