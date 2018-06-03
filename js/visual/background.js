let Background = new function() {
    const WHITELISTED_DOMAINS = ["i.imgur.com", "i.redd.it", "i.reddituploads.com"];

    let staticUrls = [
        "u9muu7r", "elUmrNS", "TcA4IsQ", "PaMnxZn", "P7hwlaN", 
        "I5O4QWi", "fT4bxpb", "U7Bx7FQ", "Qujelxk", "KAHqXM2", 
        "laGeYSO", "HdsWnkU", "xEanEAB", "NG3moRJ", "31E8sfB",  
        "XGiYXHs", "QBAbrBJ", "uclwgUc", "koPzyZ1", "8VfPY96"  
    ];

    let redditData;
    
    this.loadBackground = function() {

		loadStaticBackground();
            return;       

	 
    }

    this.loadRedditBackground = function(allowFallback = true) {
        
		loadStaticBackground();
            return;
		
    }
    
 

    let loadImgurBackground = function(allowFallback = true) {
     	loadStaticBackground();
            return;
    }
    

    
    let loadStaticBackground = function() {
        let id = staticUrls[Math.floor(Math.random() * staticUrls.length)];
        setBackground("./img/rabo.jpg", "./img/rabo.jpg");
    }

    let setBackground = function(fullRes, lowRes) {
        document.getElementById("bgimg1").style.display = "";
        document.getElementById("bgimg2").style.display = "";
        document.getElementById("limg1").style.display = "";
        document.getElementById("limg2").style.display = "";

        document.getElementById("bgimg1").src = fullRes;
        document.getElementById("bgimg2").src = fullRes;
        if (lowRes !== undefined) {
            document.getElementById("limg1").src = lowRes;
            document.getElementById("limg2").src = lowRes;
        }
    }
    
    this.flipImage = function() {
        $(".bgleft, .bgright").toggleClass("bgright bgleft");
    }
    
    this.fadeFullRes = function(element) {
        $("#" + element.id).css({"opacity": 1, "filter": "none"});
    }

    this.resetBG = function() {
        document.getElementById("bgimg1").src = "";
        document.getElementById("bgimg2").src = "";
        document.getElementById("limg1").src = "";
        document.getElementById("limg2").src = "";
    }
    
}
