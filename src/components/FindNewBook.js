import React from 'react';
import { Actions } from 'react-native-router-flux';
import Header from './header';
import { Button, FlatList, ActivityIndicator, Text, View, TextInput, TouchableOpacity, Image  } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


let bookArray = [ { description:
  '<p>A blue crayon mistakenly labeled as "red" suffers an identity crisis in this picture book by the <em>New York Times</em>–bestselling creator of <em>My Heart Is Like a Zoo</em> and <em>It\'s an Orange Aardvark!</em> Funny, insightful, and colorful, <em>Red: A Crayon\'s Story</em>, by Michael Hall, is about being true to your inner self and following your own path despite obstacles that may come your way. <em>Red</em> will appeal to fans of Lois Ehlert, Eric Carle, and <em>The Day the Crayons Quit</em>, and makes a great gift for readers of any age!</p><p>Red has a bright red label, but he is, in fact, blue. His teacher tries to help him be red (let\'s draw strawberries!), his mother tries to help him be red by sending him out on a playdate with a yellow classmate (go draw a nice orange!), and the scissors try to help him be red by snipping his label so that he has room to breathe. But Red is miserable. He just can\'t be red, no matter how hard he tries! Finally, a brand-new friend offers a brand-new perspective, and Red discovers what readers have known all along. He\'s blue! This funny, heartwarming, colorful picture book about finding the courage to be true to your inner self can be read on multiple levels, and it offers something for everyone.</p>',
 asin: '0062252070',
 amazonURL:
  'https://www.amazon.com/Red-Crayons-Story-Michael-Hall/dp/0062252070?SubscriptionId=AKIAIANIRJALOZBL4MZQ&tag=bookbch-20&linkCode=xm2&camp=2025&creative=165953&creativeASIN=0062252070',
 imageURL:
  'https://images-na.ssl-images-amazon.com/images/I/51uWSpq-coL.jpg',
 title: 'Red: A Crayon\'s Story',
 author: 'Michael Hall' },
{ description:
  '<b><i>New York Times</i> bestseller</b><BR> <BR><b>THE BOOK THAT EXPLAINS WHY RUSSIANS WANTED TO MEET WITH THE TRUMP CAMPAIGN</b><BR> <BR><b>“Part John Grisham-like thriller, part business and political memoir.” —<i>The New York Times</i></b><BR> <BR>“[<i>Red Notice</i>] does for investing in Russia and the former Soviet Union what <i>Liar’s Poker</i> did for our understanding of Salomon Brothers, Wall Street, and the mortgage-backed securities business in the 1980s. Browder’s business saga meshes well with the story of corruption and murder in Vladimir Putin’s Russia, making <i>Red Notice</i> an early candidate for any list of the year’s best books” (<i>Fortune</i>).<BR><BR>This is a story about an accidental activist. Bill Browder started out his adult life as the Wall Street maverick whose instincts led him to Russia just after the breakup of the Soviet Union, where he made his fortune.<BR> <BR> Along the way he exposed corruption, and when he did, he barely escaped with his life. His Russian lawyer Sergei Magnitsky wasn’t so lucky: he ended up in jail, where he was tortured to death. That changed Browder forever. He saw the murderous heart of the Putin regime and has spent the last half decade on a campaign to expose it. Because of that, he became Putin’s number one enemy, especially after Browder succeeded in having a law passed in the United States—The Magnitsky Act—that punishes a list of Russians implicated in the lawyer’s murder. Putin famously retaliated with a law that bans Americans from adopting Russian orphans.<BR> <BR>A financial caper, a crime thriller, and a political crusade, <i>Red Notice</i> is the story of one man taking on overpowering odds to change the world, and also the story of how, without intending to, he found meaning in his life.',
 asin: '1476755744',
 amazonURL:
  'https://www.amazon.com/Red-Notice-Finance-Murder-Justice/dp/1476755744?SubscriptionId=AKIAIANIRJALOZBL4MZQ&tag=bookbch-20&linkCode=xm2&camp=2025&creative=165953&creativeASIN=1476755744',
 imageURL:
  'https://images-na.ssl-images-amazon.com/images/I/51oNCb4W3LL.jpg',
 title:
  'Red Notice: A True Story of High Finance, Murder, and One Man\'s Fight for Justice',
 author: 'Bill Browder' },
{ description:
  '<p><b>THE INSTANT NEW YORK TIMES BESTSELLER that is a *MUST-READ BOOK* for US WEEKLY, VOGUE, NPR, ENTERTAINMENT WEEKLY, OPRAHMAG.COM, and more!</b> <br><b></b><br><b><i>What happens when America\'s First Son falls in love with the Prince of Wales?</i></b></p><p>When his mother became President, Alex Claremont-Diaz was promptly cast as the American equivalent of a young royal. Handsome, charismatic, genius―his image is pure millennial-marketing gold for the White House. There\'s only one problem: Alex has a beef with the actual prince, Henry, across the pond. And when the tabloids get hold of a photo involving an Alex-Henry altercation, U.S./British relations take a turn for the worse. </p><p>Heads of family, state, and other handlers devise a plan for damage control: staging a truce between the two rivals. What at first begins as a fake, Instragramable friendship grows deeper, and more dangerous, than either Alex or Henry could have imagined. Soon Alex finds himself hurtling into a secret romance with a surprisingly unstuffy Henry that could derail the campaign and upend two nations and begs the question: Can love save the world after all? Where do we find the courage, and the power, to be the people we are meant to be? And how can we learn to let our true colors shine through? Casey McQuiston\'s <i>Red, White & Royal Blue</i> proves: true love isn\'t always diplomatic. <br><b></b><br><b>"I took this with me wherever I went and stole every second I had to read! Absorbing, hilarious, tender, sexy―this book had everything I crave. I’m jealous of all the readers out there who still get to experience <i>Red, White & Royal Blue</i> for the first time!" - Christina Lauren, <i>New York Times </i>bestselling author of <i>The Unhoneymooners</i></b></p><p><b>"<i>Red, White & Royal Blue</i> is outrageously fun. It is romantic, sexy, witty, and thrilling. I loved every second." - Taylor Jenkins Reid, <i>New York Times</i> bestselling author of <i>Daisy Jones & The Six</i> </b></p>',
 asin: '1250316774',
 amazonURL:
  'https://www.amazon.com/White-Royal-Blue-Casey-McQuiston/dp/1250316774?SubscriptionId=AKIAIANIRJALOZBL4MZQ&tag=bookbch-20&linkCode=xm2&camp=2025&creative=165953&creativeASIN=1250316774',
 imageURL:
  'https://images-na.ssl-images-amazon.com/images/I/41Ex6azCGuL.jpg',
 title: 'Red, White & Royal Blue',
 author: 'Casey McQuiston' },
{ description:
  '<b>From the <i>New York Times</i> bestselling author of the Gray Man series comes a startlingly realistic novel of World War III.</b><br /><br />A desperate Kremlin takes advantage of a military crisis in Asia to simultaneously strike into Western Europe and invade east Africa in a bid to occupy three Rare Earth mineral mines that will give Russia unprecedented control for generations over the world\'s hi-tech sector. <br /><br />Pitted against the Russians are a Marine lieutenant colonel pulled out of a cushy job at the Pentagon and thrown into the fray in Africa, a French Special Forces captain and his intelligence operative father, a young Polish female partisan fighter, an A-10 Warthog pilot, and the commander of an American tank platoon who, along with his German counterpart, fight from behind enemy lines in Germany all the way into Russia.<br /><br />From a daring MiG attack on American satellites, through land and air battles in all theaters, naval battles in the Arabian sea, and small unit fighting down to the hand-to-hand level in the jungle, Russia\'s forces battle to either take the mines or detonate a nuclear device to prevent the West from exploiting them.',
 asin: '045149041X',
 amazonURL:
  'https://www.amazon.com/Red-Metal-Mark-Greaney/dp/045149041X?SubscriptionId=AKIAIANIRJALOZBL4MZQ&tag=bookbch-20&linkCode=xm2&camp=2025&creative=165953&creativeASIN=045149041X',
 imageURL:
  'https://images-na.ssl-images-amazon.com/images/I/51CtOctCLpL.jpg',
 title: 'Red Metal',
 author: [ 'Mark Greaney', 'Hunter Ripley Rawlings ' ] },
{ description:
  '<b>From the national bestselling author of <i>Alice</i> comes a postapocalyptic take on the perennial classic "Little Red Riding Hood"...about a woman who isn\'t as defenseless as she seems.</b><br><br>It\'s not safe for anyone  alone in the woods. There are predators that come out at night: critters and coyotes, snakes and wolves. But the woman in the red jacket has no choice. Not since the Crisis came, decimated the population, and sent those who survived fleeing into quarantine camps that serve as breeding grounds for death, destruction, and disease. She is just a woman trying not to get killed in a world that doesn\'t look anything like the one she grew up in, the one that was perfectly sane and normal and boring until three months ago.<br><br>There are worse threats in the woods than the things that stalk their prey at night. Sometimes, there are men. Men with dark desires, weak wills, and evil intents. Men in uniform with classified information, deadly secrets, and unforgiving orders. And sometimes, just sometimes, there\'s something worse than all of the horrible people and vicious beasts combined. <br><br>Red doesn\'t like to think of herself as a killer, but she isn\'t about to let herself get eaten up just because she is a woman alone in the woods....',
 asin: '0451492285',
 amazonURL:
  'https://www.amazon.com/Girl-Red-Christina-Henry/dp/0451492285?SubscriptionId=AKIAIANIRJALOZBL4MZQ&tag=bookbch-20&linkCode=xm2&camp=2025&creative=165953&creativeASIN=0451492285',
 imageURL:
  'https://images-na.ssl-images-amazon.com/images/I/51cPixBczRL.jpg',
 title: 'The Girl in Red',
 author: 'Christina Henry' },
{ description:
  '<b>Winner of the Christopher Award </b><br><b> An ILA-CBC Children’s Choices Book </b><br><b> A NCSS-CBC Notable Social Studies Book </b><br><br>Welles Crowther did not see himself as hero. He was just an ordinary kid who played sports, volunteered at his local fire department, and eventually headed off to college and then Wall Street to start a career. Throughout it all, he always kept a red bandanna in his pocket, a gift from his father. On September 11, 2001, Welles was working on the 104th floor of the South Tower of the World Trade Center when the Twin Towers were attacked. That day, Welles made a fearless choice and in doing so, saved many lives. <br><br> The survivors didn’t know his name, but one of them remembered a single detail clearly: the man was wearing a red bandanna. Welles Crowther was a hero. <br><br> Award-winning ESPN reporter Tom Rinaldi brings Welles\'s inspirational story of selflessness and compassion to life in this accessible young readers’ adaptation of his <i>New York Times</i> bestselling book. This powerful story of making a difference through our actions is perfect for helping the post-9/11 generation understand the meaning of this historic day through the eyes of one young man.<br>  <br> “Rinaldi’s young reader edition of his award-winning adult story puts a face on that day (9/11), a hero’s face, and brings to young people someone who stood brave in the toughest of times and who, in the end, was lost doing his best to help others survive.”—<i>VOYA </i>',
 asin: '0425287645',
 amazonURL:
  'https://www.amazon.com/Red-Bandanna-Young-Readers-Adaptation/dp/0425287645?SubscriptionId=AKIAIANIRJALOZBL4MZQ&tag=bookbch-20&linkCode=xm2&camp=2025&creative=165953&creativeASIN=0425287645',
 imageURL:
  'https://images-na.ssl-images-amazon.com/images/I/51bPsobSucL.jpg',
 title: 'The Red Bandanna (Young Readers Adaptation)',
 author: 'Tom Rinaldi' },
{ description:
  '<p><strong>Ten rules of dealing with dilemmas and discouragements – a divine protocol for handling life. <em>Red Sea Rules </em>has been updated with new study questions.</strong></p><p>Life is hard, especially for Christians. It is certain that we will face difficulties, and that God will allow them, as He allowed the Israelites to become trapped between Pharaoh\'s rushing armies and the uncrossable Red Sea. But just as certain is the fact that the same God who led us in will lead us out. As <em>The Red Sea Rules</em> makes comfortingly clear, He <em>is</em> in control.</p><p>Using the Israelites\' story in Exodus 14 as an example, Robert Morgan offers ten sound strategies for moving from fear to faith. Just as Moses and the Israelites found themselves caught between "the devil and the deep Red Sea," so are we sometimes overwhelmed by life\'s problems. <em>The Red Sea Rules</em> reveals that even in the midst of seemingly impossible situations God promises to make a way for us. His loving guidance will protect us through danger, illness, marital strife, financial problems, or whatever challenges Satan places in our path.</p><p><em>Red Sea Rules</em> also is available in Spanish, <em>reglas del Mar Rojo</em>.</p>',
 asin: '0529104407',
 amazonURL:
  'https://www.amazon.com/Red-Sea-Rules-God-Given-Strategies/dp/0529104407?SubscriptionId=AKIAIANIRJALOZBL4MZQ&tag=bookbch-20&linkCode=xm2&camp=2025&creative=165953&creativeASIN=0529104407',
 imageURL:
  'https://images-na.ssl-images-amazon.com/images/I/51WsbvwJCAL.jpg',
 title:
  'The Red Sea Rules: 10 God-Given Strategies for Difficult Times',
 author: 'Robert Morgan' },
{ description:
  'Brady loves life on the Chesapeake Bay with his friends J.T. and Digger. But developers and rich families are moving into the area, and while Brady befriends some of them, like the DiAngelos, his parents and friends are bitter about the changes. Tragedy strikes when the DiAngelos’ kayak overturns in the bay, and Brady wonders if it was more than an accident. Soon, Brady discovers the terrible truth behind the kayak’s sinking, and it will change the lives of those he loves forever. Priscilla Cummings deftly weaves a suspenseful tale of three teenagers caught in a wicked web of deception.',
 asin: '0142405736',
 amazonURL:
  'https://www.amazon.com/Red-Kayak-Priscilla-Cummings/dp/0142405736?SubscriptionId=AKIAIANIRJALOZBL4MZQ&tag=bookbch-20&linkCode=xm2&camp=2025&creative=165953&creativeASIN=0142405736',
 imageURL:
  'https://images-na.ssl-images-amazon.com/images/I/41%2BmvZLREIL.jpg',
 title: 'Red Kayak',
 author: 'Priscilla Cummings' },
{ description:
  '<div>Top 32 Canadian Books for Children, Canadian Children’s Book Centre 100 Best Canadian Kids’ Books, Today’s Parent Magazine<BR><BR>Red is Best gets it right. This is a true children’s classic.” Ken Setterington, author, storyteller, Children and Youth Advocate for the Toronto Public Library<BR><BR>Delightful.” School Library Journal<BR><BR>Young Kelly’s mom doesn’t understand about red. Sure, the brown mittens are warmer, but the red mitts make better snowballs. And the red boots aren’t just for rain; they take bigger steps in any weather. And, yes! a green cup does make a difference juice tastes better in the red cup. No doubt about it, red is best.<BR><BR>Kathy Stinson’s classic tale of one toddler’s obstinate color preference has been charming readers for 25 years now. With over 275,000 copies in print, Red is Best has steadily marched its way to become a children’s book classic. Now a new generation of readers can discover Stinson’s insistent young heroine, aptly captured in the simple drawings by Robin Baird Lewis, each punctuated by the right dazzle of red.<BR><BR>With its plucky charm presented in a redesigned interior, and a special cover commemorating the book’s 25th anniversary, the re-release of Red is Best is sure to be a red-letter day.<BR></div>',
 asin: '1554510511',
 amazonURL:
  'https://www.amazon.com/Red-Best-Kathy-Stinson/dp/1554510511?SubscriptionId=AKIAIANIRJALOZBL4MZQ&tag=bookbch-20&linkCode=xm2&camp=2025&creative=165953&creativeASIN=1554510511',
 imageURL:
  'https://images-na.ssl-images-amazon.com/images/I/51HpVlCM9AL.jpg',
 title: 'Red is Best',
 author: 'Kathy Stinson' },
{ description:
  'What If Everything You\'ve Been Taught About Losing Weight Is Wrong',
 asin: '1944602097',
 amazonURL:
  'https://www.amazon.com/Code-Red-Revolution-Thousands-Exercise/dp/1944602097?SubscriptionId=AKIAIANIRJALOZBL4MZQ&tag=bookbch-20&linkCode=xm2&camp=2025&creative=165953&creativeASIN=1944602097',
 imageURL:
  'https://images-na.ssl-images-amazon.com/images/I/51W-wd3%2B47L.jpg',
 title:
  'The Code Red Revolution: How Thousands of People are Losing Weight and Keeping It Off WITHOUT Pills, Shakes, Diet Foods, or Exercise',
 author: 'Cristy - Code Red - Nickel' } ];










export default class FindNewBook extends React.Component {

  

  constructor(props){
    super(props);
    this.state ={ 
        showList: false,
        showList2: false,
        isLoading: false,
        dataSource: ["", ""],
        text1:'',
        text2:'',
        lookupButton1: true,
        continue: false,
        book1Saved: false,
        book2Saved: false,
        editable: true,
        editable2: true,
    }

  }
    
  componentDidMount(){
    this.resetBook1();
    this.resetBook2();
        this.setState({
          text1: '',
          text2: ''
        })
  }

  async resetBook1() {
    console.log("Reset 1 was called");
    this.setState({
      book1Saved: false,
      continue: false
      })
    try {
      await AsyncStorage.removeItem('bookObject1');
      // const value = await AsyncStorage.getItem('bookObject1');
      // this.setState({myKey: value});
    } catch (error) {
      console.log("Error resetting data" + error);
    }
  }
  async resetBook2() {
    console.log("Reset 2 was called");
    this.setState({
      book2Saved: false,
      continue: false
      })
      
    try {
      await AsyncStorage.removeItem('bookObject2');
      // const value = await AsyncStorage.getItem('bookObject2');
      // this.setState({myKey: value});
    } catch (error) {
      console.log("Error resetting data" + error);
    }
  }

  _bookLookUp1 = async () => {
    console.log("Book Look up 1: isloading true and disabled2 true")
    this.setState({
      isLoading:true,
      editable2:true,
      continue: false
    })
      //fetch
      let res = await fetch('http://159.65.97.145:8765/keyword', {
        headers: {
          'content-type': 'application/json',
          Accept: 'application/json'},
        method : 'POST',
        body: JSON.stringify({keyword_search: this.state.text1})
      });
      res = await res.json();
      
      if(res.response != -1){
        console.log("response is not -1");
        this.setState({
            showList: true,
            data: res,
            isLoading: false
        })
      }
      
      
  }

  _bookLookUp2 = async () => {
    this.setState({
      isLoading:true,
      editable:true,
      continue: false
    })
 
      //fetch
      let res = await fetch('http://159.65.97.145:8765/keyword', { //keyword  // find_book
        headers: {
          'content-type': 'application/json',
          Accept: 'application/json'},
        method : 'POST',
        body: JSON.stringify({keyword_search: this.state.text2})  // keyword_search // name
      });
      res = await res.json();
      
      if(res.response != -1){
        console.log("response is not -1");
        this.setState({
            showList: true,
            data: res,
            isLoading: false
        })
      }
      
  }

finalChoiceSubmission1 = (userChoice) => {
  console.log("F submission 1")
        this.setState({
            text1: userChoice.title,
            showList1: false,
            editable: false,
            editable2:true
        })
        this.checkContinue();
        // Save into Async-storage
      let book = {
        asin: userChoice.asin,
        amazonURL: userChoice.amazonURL,
        description: userChoice.description,
        imageURL: userChoice.imageURL,
        title: userChoice.title,
        author: userChoice.author
      };
      AsyncStorage.setItem('bookObject1', JSON.stringify(book));
  }


  finalChoiceSubmission2 = (userChoice) => {
    console.log("F submission 2")
    this.setState({
        text2: userChoice.title,
        showList2: false,
        editable: true,
        editable2:true
    })
    this.checkContinue();
    // Save into Async-storage
    let book = {
      asin: userChoice.asin,
      amazonURL: userChoice.amazonURL,
      description: userChoice.description,
      imageURL: userChoice.imageURL,
      title: userChoice.title,
      author: userChoice.author
    };
    AsyncStorage.setItem('bookObject2', JSON.stringify(book));
}

checkContinue(){
  console.log("check continue")
  if (this.state.book1Saved && this.state.book2Saved){
    this.setState({
      continue: true,
    })
  }
}

bookList1(userChoice) {

  console.log("Book list 1")
    this._bookLookUp1()
    this.setState({
        isLoading: false,
        text1: userChoice,
        showList1: true,
        book1Saved: true,
        editable2:false,
    })
  }

  bookList2(userChoice) {
    console.log("Book list 2")
    this._bookLookUp2()
    this.setState({
        isLoading: false,
        text2: userChoice,
        showList2: true,
        book2Saved: true,
        editable:false,
        
    })
  }

  userChangeText1(text1){
    this.resetBook1();
    
    this.setState({
      text1: text1,
      book1Saved: false,
      })
  }

  userChangeText2(text2){
    this.resetBook2();

    this.setState({
      text2: text2,
      book2Saved: false,
      })
  }

  

  render(){
    return(
      <View >
          <Header headerText={'Bookbranch'} />
            <Text
                style = {{fontSize: 20, fontWeight: 'bold', marginTop: 220,marginLeft: 40}}>
                Step #1: Tell us your favorite 2 books you've read recently</Text>
            <TextInput
                style={{marginTop: 10, marginLeft: 30, height: 40, width: 300, borderColor: '#499920', borderWidth: 1}}
                placeholder=" Book #1 Search"
                placeholderTextColor="gray"
                value={this.state.text1}
                editable={(this.state.editable)} 
                selectTextOnFocus={(this.state.editable)}
                onSubmitEditing={() => this.bookList1(this.state.text1)}
                onChangeText={(text1) => this.userChangeText1(text1) }
                
            />
            <TextInput
                style={{marginTop: 5, marginLeft: 30, height: 40, width: 300, borderColor: '#499920', borderWidth: 1}}
                placeholder=" Book #2 Search"
                placeholderTextColor="gray"
                value={this.state.text2}
                onSubmitEditing={() => this.bookList2(this.state.text2)}
                onChangeText={(text2) => this.userChangeText2(text2) }
                
                editable={(this.state.editable2)} 
                selectTextOnFocus={(this.state.editable2)}
            />
            
        {/* Book List for Book #1 */}
        {(this.state.showList1) 
        &&
        <FlatList style={{marginBottom: hp('70%'), borderBottomColor:'black'}}
          data={this.state.data}
          renderItem={({item}) => 
          
          <View style={{
              flex:1, 
              flexDirection: 'column',
              justifyContent: 'space-between',
              alignItems: 'center',
              
          }}>
          <Image
          style={{width: 50, height: 50}}
          source={{uri: item.imageURL}}
        />
            <Button
            style={{width: 50, height: 100}}
                title={item.title}
                onPress={ () => this.finalChoiceSubmission1(item)  }
                >
            </Button>
          </View>
          }
        />}

        {/* Book List for Book #2 */}
        {(this.state.showList2) && <FlatList style={{marginBottom: hp('70%'), borderBottomColor:'black'}}
          data={this.state.data}
          renderItem=
                {({item}) => 
                
                <View style={{
                  flex:1, 
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <Image
                style={{width: 50, height: 50}}
                source={{uri: item.imageURL}}
              />
                  <Button
                      title={item.title}
                      onPress={ () => this.finalChoiceSubmission2(item)  }
                      >
                  </Button>
                </View>
                }  
        />}
        {(this.state.continue) && <Button
                title={"Continue"}
                onPress={ () => Actions.attList({textOne: this.state.text1, textTwo: this.state.text2}) }
                >
            </Button>}
            {this.state.isLoading && <View style={{flex: 1, padding: 20}}>
            <ActivityIndicator/>
            </View>}
      </View>
    );
  }
}

const styles = {
  ButtonStyle1: {
      borderWidth: 1,
      borderRadius: 5,
      borderColor: '#000000',
      backgroundColor: '#D3D3D3',
      height: 30,
      width: 140,
      elevation: 1,
      marginLeft: 190,
     // marginRight: 5,
      marginTop: 230,
      position: 'absolute'       
  },
  flatListResults:{
      borderRadius: 4,
      borderWidth: 0.5,
      borderColor: '#d6d7da',
      backgroundColor: 'red',
  },
  TextStyle1: {
      fontWeight: 'bold',
      fontSize: 13,
      marginTop: 5,
      marginLeft: 50,
      position: 'absolute'
  }
};