PRAGMA foreign_keys=OFF;
BEGIN TRANSACTION;
CREATE TABLE US_Deaths(
  "Quantifier" TEXT,
  "2000" TEXT,
  "2001" TEXT,
  "2002" TEXT,
  "2003" TEXT,
  "2004" TEXT,
  "2005" TEXT,
  "2006" TEXT,
  "2007" TEXT,
  "2008" TEXT,
  "2009" TEXT,
  "2010" TEXT,
  "2011" TEXT,
  "2012" TEXT,
  "2013" TEXT,
  "2014" TEXT,
  "2015" TEXT,
  "2016" TEXT
);
INSERT INTO US_Deaths VALUES('US Total Population','281421906','284968955','287625193','290107933','292805298','295516599','298379912','301231207','304093966','306771529','308745538','311591917','313914040','316128839','318857056','321418820','323127513');
INSERT INTO US_Deaths VALUES('Deaths Per Year','2403351','2416425','2443387','2448288','2397615','2448017','2426264','2423712','2471984','2437163','2468435','2515458','2543279','2596993','2626418','2712630','2744248');
INSERT INTO US_Deaths VALUES('Estimated Firearm Owners in USA (based on 30% polls)','84426572','85490687','86287558','87032380','87841589','88654980','89513974','90369362','91228190','92031459','92623661','93477575','94174212','94838652','95657117','96425646','96938254');
INSERT INTO US_Deaths VALUES('Firearms Includes Assault + Suicide Data','28663','29573','30242','30136','29569','30694','30896','31224','31593','31347','31672','32351','33563','33636','33594','36252','38658');
INSERT INTO US_Deaths VALUES('Motor Vehicle Deaths','43354','43788','45380','44757','44933','45343','45316','43945','39790','36216','35332','35303','36415','35369','35398','37757','40327');
INSERT INTO US_Deaths VALUES('Poison Deaths (All Intents)','20310','22306','26502','28760','30360','32745','37334','40100','41115','41641','42958','46078','46193','48581','52000','57593','69014');
INSERT INTO US_Deaths VALUES('Poison Deaths (Accidental)','12757','14078','17550','19457','20950','23618','27531','29846','31116','31758','33041','36280','36332','38581','42032','47478','58335');
INSERT INTO US_Deaths VALUES('Falling Deaths ','13322','15019','16257','17229','18807','19656','20823','22631','24013','24792','26009','27483','28753','30208','31959','33381','34673');
INSERT INTO US_Deaths VALUES('Alcohol Induced Deaths','19643','20114','20218','20687','21081','21634','22073','23199','24189','24518','25692','26654','27762','29001','30722','33171','34865');
INSERT INTO US_Deaths VALUES('Drug Induced Deaths','19705','21687','26025','28703','30690','33520','38382','38370','38649','39147','40393','43544','43819','46471','49714','55403','67265');
INSERT INTO US_Deaths VALUES('Assault (resulting in death)  Includes Firearm data','16765','20308','17638','17732','17357','18124','18573','18361','17826','16799','16259','16238','16688','16121','15872','17793','19362');
INSERT INTO US_Deaths VALUES('Intentional Self Harm (Suicide) Includes Firearm data','29350','30622','31655','31484','32439','32637','33300','34598','36035','36909','38364','39518','40600','41149','42826','44193','44965');
INSERT INTO US_Deaths VALUES('Malignant Neoplasms (MN) - Cancers','553091','553768','557271','556902','553888','559312','559888','562875','565469','567628','574743','576691','582623','584881','591700','595930','598038');
INSERT INTO US_Deaths VALUES('MN of Trachea, Bronchus, lung','155521','156058','157713','158086','158091','159292','158664','158760','158656','158158','158318','157017','157499','156252','155611','153819','148945');
INSERT INTO US_Deaths VALUES('MN of lymphoid, hematopoietic','56518','56341','56225','55679','54645','55028','55045','54991','54954','55406','55590','56478','57020','56936','57536','56725','57234');
INSERT INTO US_Deaths VALUES('MN of Colon','57477','56887','56741','55958','53772','53252','53549','53586','53321','52394','52622','52287','52028','52252','52234','53176','53145');
INSERT INTO US_Deaths VALUES('MN of Pancreas','29332','29803','30264','30777','31772','32760','33454','34117','35236','35628','36888','37344','38797','38996','40419','41615','42757');
INSERT INTO US_Deaths VALUES('MN of Breast','42300','41809','41883','42000','41316','41491','41210','40970','41026','41078','41435','41374','41557','41325','41678','41987','41952');
INSERT INTO US_Deaths VALUES('MN of Other','211943','212870','214445','214402','214292','217489','217966','220451','222276','224964','229890','232191','235722','239120','244222','248608','254005');
INSERT INTO US_Deaths VALUES('Major Cardiovascular Diseases (MC)','936923','922334','918628','902443','861190','856030','823746','806156','804483','780624','780213','779109','782985','796494','803227','832024','835947');
INSERT INTO US_Deaths VALUES('MC of Heart','710760','700142','696947','685089','652486','652091','631636','616067','616828','599413','597689','596577','599711','611105','614348','633842','635260');
INSERT INTO US_Deaths VALUES('Pneumonia','63548','61777','64954','63371','58564','61189','55477','52306','54562','50774','49597','52294','49530','53282','50622','51811','48632');
INSERT INTO US_Deaths VALUES('Chronic Lower Resp','122009','123013','124816','126382','121987','130933','124583','127924','141090','137353','138080','142943','143489','149205','147101','155041','154596');
INSERT INTO US_Deaths VALUES('Chronic Liver Disease','26552','27035','27257','27503','27013','27530','27555','29165','29963','30558','31903','33642','34979','36427','38170','40326','40545');
INSERT INTO US_Deaths VALUES('Renial Failure (Kidney)','36471','38784','40222','41737','41732','42868','43344','43263','43935','43840','44362','44893','44988','46425','47364','49113','49179');
INSERT INTO US_Deaths VALUES('Diabetes','69301','71372','73249','74219','73138','75119','72449','71382','70553','68705','69071','73831','73932','75578','76488','79535','80058');
INSERT INTO US_Deaths VALUES('''Alzheimer''''s''','49558','53852','58866','63457','65965','71599','72432','74632','82435','79003','83494','84974','83637','84767','93541','110561','116103');
COMMIT;