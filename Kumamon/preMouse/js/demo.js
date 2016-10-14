
var T1 = new TimelineMax();
T1.to(".pre_bear01", 0.5, {display:"none"})
		.to(".pre_bear02", 0.5 ,{display:"block"})
		.to(".pre_bear02", 0.2 ,{display:"none"})
		.to(".pre_bear03", 0.5 ,{display:'block'})
		.to(".pre_bear03", 0.2 ,{display:"none"})
		.to(".pre_bear04", 0.5 ,{display:'block'})
		.to(".pre_bear04", 0.2 ,{display:"none"})
		//行走的小熊
		.to(".pre_walkbear05", 0.5 ,{display:"block"})
		.to(".pre_walkbear05", 0.2 ,{display:"none"})

		.to(".pre_walkbear06", 0.5 ,{display:"block"})
		.to(".pre_walkbear06", 0.2 ,{display:"none"})

		.to(".pre_walkbear07", 0.5 ,{display:"block"})
		.to(".pre_walkbear07", 0.2 ,{display:"none"})

		.to(".pre_walkbear08", 0.5 ,{display:"block"})
		.to(".pre_walkbear08", 0.2 ,{display:"none"})
		//	背面的小熊
		.to(".backStart09", 0.5 ,{display:"block"})
		.to(".backStart09", 0.2 ,{display:"none"})

		.to(".Text_mmda", 0.5 ,{display:"block",opacity:1} , "-=0.5")

		.to(".backLeft10", 0.5 ,{display:"block"})
		.to(".backLeft10", 0.2 ,{display:"none"})

		.to(".backRight11", 0.5 ,{display:"block"})
		.to(".backRight11", 0.2 ,{display:"none"})

		.to(".back_front12", 0.5 ,{display:"block"})
		.to(".back_front12", 0.2 ,{display:"none"})

		.to(".back_end13", 0.5 ,{display:"block"})
		.to(".Text_mmda", 0.3 ,{display:"none",opacity:0} , "-=0.3")
		.to(".back_end13", 0.2 ,{display:"none"})

		.to(".mgPaishou14", 0.5 ,{display:"block"})
		.to(".text_MgDb11", 0.5 ,{display:"block",opacity:1})
		.to(".mgPaishou14", 0.2 ,{display:"none"})

		.to(".mgRedBags15", 1 ,{display:"block"})
		.to(".star01", 0.5 ,{display:"block"})
		.to(".star02", 0.2 ,{display:"block"},"+=0.2")

		.to(".mgRedBags15", 0.2 ,{display:"none"})
		.to(".star01", 0.2 ,{display:"none"},'-=0.2')
		.to(".star02", 0.3 ,{display:"none"},'-=0.3')

		.to(".mgRun01", 0.5 ,{display:"block"})
		.to(".mgRun01", 0.3 ,{display:"none"})

		.to(".mgRun02", 0.5 ,{display:"block"})
		.to(".text_MgDb11", 0.5 ,{display:"none",opacity:0},'-=0.5')
		.to(".mgRun02", 0.2 ,{display:"none"})


		.to(".gift_haqian", 0.5 ,{display:"block"})
		.to(".text_gift", 0.5 ,{display:"block",opacity:1},'-=0.3')
		.to(".gift_haqian", 0.2 ,{display:"none"})

		.to(".gift_tanqi01", 0.5 ,{display:"block"})
		.to(".gift_tanqi01", 0.2 ,{display:"none"})

		.to(".gift_tanqi02", 0.5 ,{display:"block"})
		.to(".text_gift", 0.5 ,{display:"none",opacity:0},'-=0.3')
		.to(".gift_tanqi02", 0.2 ,{display:"none"})

		.to(".upBear", 0.5 ,{display:"block"})
		.to(".text_coming", 0.5 ,{display:"block",opacity:1},'-=0.3')
		.to(".upBear", 0.2 ,{display:"none"})

		.to(".slideBear", 0.5 ,{display:"block"})
		.to(".slideBear", 0.2 ,{display:"none"})

		.to(".hitBear", 0.5 ,{display:"block"})
		.to(".hitBear", 0.2 ,{display:"none"})

		.to(".hurry2play", 0.5 ,{display:"block"})
		.to(".text_coming", 0.5 ,{display:"none",opacity:0},'-=0.3')

		.to(".mgLogo", 0.5 ,{display:"block"})
		.to(".guideHomePage", 0.5 ,{display:"block"})
		.to(".mgBeginBtnWrap", 0.5 ,{display:"block"})
		;