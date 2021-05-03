1. 
<! DOCTYPE html >
< html  lang = " ru " >
	< голова >
		< meta  charset = " utf-8 " >
		< title > упражнение1 </ title >
		< link  href = " css / style.css " rel = " stylesheet " >
	</ голова >

	< тело >
	< div  class = " container " id = " cont " >
		< сценарий >
			var  container  =  document . querySelector ( ".container" ) ;
			контейнер . стиль . background  =  "коричневый" ;
			контейнер . стиль . width  =  "660 пикселей" ;
			контейнер . стиль . высота  =  "660 пикселей" ;
			контейнер . стиль . paddingLeft  =  "60 пикселей" ;
			контейнер . стиль . paddingBottom  =  "60 пикселей" ;
			контейнер . стиль . маржа  =  "0 авто" ;
			контейнер . стиль . дисплей  =  "гибкий" ;
			контейнер . стиль . flexWrap  =  "обертка" ;
				
			function  my_initiation  ( )  {
				var  cell  =  document . createElement  ( "div" ) ;
				ячейка . className = "ячейка" ;
				прод . добавить ( ячейка ) ;
				ячейка . стиль . width  =  "60 пикселей" ;
				ячейка . стиль . высота  =  "60 пикселей" ;
				ячейка . стиль . маржа  =  "0px" ;
				ячейка . стиль . padding  =  "0px" ;
				ячейка . стиль . fontSize  =  "40px" ;
				ячейка . стиль . fontWeight  =  "жирный" ;
				ячейка . стиль . textAlign  =  "центр" ;
				
			}
			окно . onload  =  my_initiation ;
			
			for  ( var  n = 0 ;  ( n ! = 121 ) ;  n ++ )  {
				окно . onload  =  my_initiation  ( ) ;
			} ;
			
			var  masCell  =  документ . querySelectorAll  ( ".cell" ) ;
			for  ( var  i = 0 ;  ( i < masCell . length ) ;  i ++ )  {
				var  c ;
				if  ( i % 2 == 0 ) 	{
					c = "димгрей" ;
				}  else  {
					c = "бисквитный" ;
					}
				masCell [ i ] . стиль . background = c ;
				if  ( ( i > 33 )  &&  ( i < 42 ) )  {
					masCell [ i ] . innerText  =  "П" ;
				} ;
				if  ( ( i > 88 )  &&  ( i < 97 ) )  {
					masCell [ i ] . innerText  =  "П" ;
				} ;
				
				masCell [ 23 ] . innerText  =  "Л" ;
				masCell [ 24 ] . innerText  =  "К" ;
				masCell [ 25 ] . innerText  =  "С" ;
				masCell [ 26 ] . innerText  =  "Ф" ;
				masCell [ 27 ] . innerText  =  "К" ;
				masCell [ 28 ] . innerText  =  "С" ;
				masCell [ 29 ] . innerText  =  "К" ;
				masCell [ 30 ] . innerText  =  "Л" ;	
				
				masCell [ 100 ] . innerText  =  "Л" ;
				masCell [ 101 ] . innerText  =  "К" ;
				masCell [ 102 ] . innerText  =  "С" ;
				masCell [ 103 ] . innerText  =  "Ф" ;
				masCell [ 104 ] . innerText  =  "К" ;
				masCell [ 105 ] . innerText  =  "С" ;
				masCell [ 106 ] . innerText  =  "К" ;
				masCell [ 107 ] . innerText  =  "Л" ;
				
				for  ( var  f = 89 ;  ( f < 108 ) ;  f ++ )  {
					masCell [ f ] . стиль . цвет  =  "белый" ;
				}
				for  ( var  f = 0 ;  ( f < 22 ) ;  f ++ )  {
					masCell [ f ] . стиль . background  =  "коричневый" ;
				}
				for  ( var  f = 110 ;  ( f < 121 ) ;  f ++ )  {
					masCell [ f ] . стиль . background  =  "коричневый" ;
				}
				
				masCell [ 22 ] . стиль . background  =  "коричневый" ;
				masCell [ 33 ] . стиль . background  =  "коричневый" ;
				masCell [ 44 ] . стиль . background  =  "коричневый" ;
				masCell [ 55 ] . стиль . background  =  "коричневый" ;
				masCell [ 66 ] . стиль . background  =  "коричневый" ;
				masCell [ 77 ] . стиль . background  =  "коричневый" ;
				masCell [ 88 ] . стиль . background  =  "коричневый" ;
				masCell [ 99 ] . стиль . background  =  "коричневый" ;
				masCell [ 31 ] . стиль . background  =  "коричневый" ;
				masCell [ 32 ] . стиль . background  =  "коричневый" ;
				masCell [ 42 ] . стиль . background  =  "коричневый" ;
				masCell [ 43 ] . стиль . background  =  "коричневый" ;
				masCell [ 53 ] . стиль . background  =  "коричневый" ;
				masCell [ 54 ] . стиль . background  =  "коричневый" ;
				masCell [ 64 ] . стиль . background  =  "коричневый" ;
				masCell [ 65 ] . стиль . background  =  "коричневый" ;
				masCell [ 75 ] . стиль . background  =  "коричневый" ;
				masCell [ 76 ] . стиль . background  =  "коричневый" ;
				masCell [ 86 ] . стиль . background  =  "коричневый" ;
				masCell [ 87 ] . стиль . background  =  "коричневый" ;
				masCell [ 97 ] . стиль . background  =  "коричневый" ;
				masCell [ 98 ] . стиль . background  =  "коричневый" ;
				masCell [ 108 ] . стиль . background  =  "коричневый" ;
				masCell [ 109 ] . стиль . background  =  "коричневый" ;
				
				masCell [ 12 ] . innerText  =  "А" ;
				masCell [ 13 ] . innerText  =  "B" ;
				masCell [ 14 ] . innerText  =  "C" ;
				masCell [ 15 ] . innerText  =  "D" ;
				masCell [ 16 ] . innerText  =  "E" ;
				masCell [ 17 ] . innerText  =  "F" ;
				masCell [ 18 ] . innerText  =  "G" ;
				masCell [ 19 ] . innerText  =  "H" ;
				masCell [ 111 ] . innerText  =  "А" ;
				masCell [ 112 ] . innerText  =  "B" ;
				masCell [ 113 ] . innerText  =  "C" ;
				masCell [ 114 ] . innerText  =  "D" ;
				masCell [ 115 ] . innerText  =  "E" ;
				masCell [ 116 ] . innerText  =  "F" ;
				masCell [ 117 ] . innerText  =  "G" ;
				masCell [ 118 ] . innerText  =  "H" ;
				
				masCell [ 97 ] . стиль . цвет  =  "черный" ;
				masCell [ 99 ] . стиль . цвет  =  "черный" ;
				
				masCell [ 22 ] . innerText  =  "1" ;
				masCell [ 33 ] . innerText  =  "2" ;
				masCell [ 44 ] . innerText  =  "3" ;
				masCell [ 55 ] . innerText  =  "4" ;
				masCell [ 66 ] . innerText  =  "5" ;
				masCell [ 77 ] . innerText  =  "6" ;
				masCell [ 88 ] . innerText  =  "7" ;
				masCell [ 99 ] . innerText  =  "8" ;
				masCell [ 31 ] . innerText  =  "1" ;
				masCell [ 42 ] . innerText  =  "2" ;
				masCell [ 53 ] . innerText  =  "3" ;
				masCell [ 64 ] . innerText  =  "4" ;
				masCell [ 75 ] . innerText  =  "5" ;
				masCell [ 86 ] . innerText  =  "6" ;
				masCell [ 97 ] . innerText  =  "7" ;
				masCell [ 108 ] . innerText  =  "8" ;
			}
			
		</ скрипт >
		</ div >
	</ body >
</ html >

2. неуспел сделать