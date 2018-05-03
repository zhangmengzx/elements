
      var con = {};
      var area=$(".area").val();
      var netip=$(".netip").val();
      var unique=$(".unique").val();

      if (area!="") {
        con["area"] = area;
      }
      if (netip!="") {
        con["netIp"] = netip;
      }
      if (unique!="") {
        con["uniqueId"] = unique;
      }
      // alert(JSON.stringify(con));

      console.log(first);
      pagetime(first,second,con,page,flog,days,now);
