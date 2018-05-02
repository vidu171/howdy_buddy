import React from 'react';
import { Grid } from 'semantic-ui-react';
import BlogOut from './BlogOut';

export default class Blogs extends React.Component{
	render(){
		const blog1=[{
			photo:'http://i64.tinypic.com/2csb0io.jpg',
			title:'Dreams and Mental State',
			description:'Dream It...',
			author:'Fiza',
			para1:"The mutual relationship between sleep and mental health is not yet completely understood , But neuroimaging and neurochemistry studies suggest that a good night's sleep helps foster both mental and emotional resilience, while chronic sleep disruptions set the stage for negative thinking and emotional vulnerability. Sleeping problems are more likely to affect patients with psychiatric disorders than people in the general population. Sleep problems may increase risk for developing particular mental illnesses, as well as result from such disorders. Although scientists are still trying to tease apart all the mechanisms, they've discovered that sleep disruption — which affects levels of neurotransmitters and stress hormones, among other things wreaks havoc in the brain, impairing thinking and emotional regulation. In this way, insomnia may amplify the effects of psychiatric disorders, and vice versa. Most people know that caffeine contributes to sleeplessness, but so can alcohol and nicotine. Alcohol initially depresses the nervous system, which helps some people fall asleep, but the effects wear off in a few hours and people wake up. Regular aerobic activity helps people fall asleep faster, spend more time in deep sleep, and awaken less often during the night. Meditation, guided imagery, deep breathing exercises, and progressive muscle relaxation can counter anxiety and racing thoughts. Sleeping well gets peace and wellness to your mind.",
			para2:"Dreams are a piece of imagination during sleep. Type of dreams mostly depend on what has been going through your mind the whole time. There are a number of things that are dreamt and they  can show a lot about mental state , reflecting conditions ranging from general emotional states to serious mental disorders. Sometimes a dream is just a dream but, in some cases, it may mean something more.",
			para3:"Though we know that sleep is essential for living, its actual purpose and the purpose of sleep, the sleep stage responsible for vivid dreaming is still unknown. Another factor that makes dreaming hard to pin down is that it’s difficult to study, though scientists can monitor brain activity while someone is dreaming, the actual content of a dream, as well as how vivid or disjointed a dream feels, can only be described by the dreamer in necessarily subjective terms. Since one person’s incredibly bizarre dream might be another person’s normal Tuesday snoozefest, coming up with quantitative research about dreaming is complicated. By categorizing the dreams that preceded mood shifts, its possible to identify a particular type of dream that seemed to precede a mood shift, particularly in the direction of mania. Nightmares represent a primary sleep disorder rather than a symptom of an underlying psychological conflict. Disturbed sleep is the result of depression or trauma, or your nightmares seem to crop up out of the blue, it’s worth talking to an expert. Sleep is the most essential part of life and important for well being. Taking good care of your sleep is crucial step to a healthy and happy lifestyle."
		},{
			photo:'http://i64.tinypic.com/mmpv7d.jpg',
			title:'Body Dysmorphic Disorder',
			description:'This blog is about something something... ',
			author:'Arnav Kaushal',
			para1:"This is a story about Cecil, a 20-something college kid. Living a normal life and being busy in self-development, having big dreams and working hard towards them. Going good with grades and enjoying life, like every responsible person should. Having a loving family and a healthy relationship (Let’s call her Ayela), things were looking great, and so was he.",
			para2:"But this was about to change when his mirror telling him a different story. Soon he was about to feel his confidence plunge to depths unfathomable. Soon he was to feel more and more obsessed about his looks. Soon, he was about to feel distant with his emotions. Soon he was about to ignore his family telling him that he looked good. Soon he was about to go into a world, where medicine had still not reached, but many teenagers had.",
			para3:"What’s this 'world' called, you say? It’s called BDD, Body Dysmorphic Disorder a mental state or an 'illness' where a person is in a constant state of disappointment with their looks and especially about a specific body part. To Cecil it was his nose and 'puffy' eyes when he smiled",
			para4:"He was constantly obsessing about his nose and his seemingly “puffy eyed” smile in front of the mirror. So much so, that he spent hours and hours in front of the mirror, generating a negative self-image while missing out on life, college, family & friends. He was no longer the ambitious young Cecil people had known. His personality had severely changed. He was losing his thirst for success & learning. Not wanting to go out now, he just spent major chunk of his days looking at the person in the mirror which filled him with disgust and left him wishing for better features. This had got his family and his girlfriend worrying about his wellbeing. His life had started to revolve around finding ways to hide his “ugliness”.",
			para5:"One such way was wearing sunglasses at all times thus gaining him the name “Sunglass man” through his peers at college. To him, it was just a way to hide is supposedly “ugly” features, but to an informed individual, these were the first signs of BDD. He was in desperate need of help. But he did not know this. He had come to believe, that he was in fact, ugly. The tipping point for his girlfriend came in, when his sunglasses broke and stopped even the small fake smiles he did till got the new Sunglasses. That was enough for Ayela, to seek out Professional help for Cecil.",
			para6:"But as I said, BDD is a psychological disorder, where medicine had not reached yet. But many people like Cecil had. Psychiatrists’ diagnosed him with depression and his medication started. It was only after she read an article in a Fashion magazine about Models diagnosed with BDD, did she realize that Cecil’s symptoms were similar to those discussed in the magazine. She knew what needed to be done.",
			para7:"With correct anti-depressants and a lot of support from the family, friends and the online communities, Cecil recovered in a period nearing a year. Now, to keep BDD at bay, he times himself whenever he stands in front of the mirror. The moment he focuses on the mirror for more than 5 min, he leaves that particular spot. Now he leads a healthy life, full of energy, vibrance. Now Cecil educates other people about BDD via lectures and seminars."
		}];
		const poem1=[{
			photo:'',
			title:'My Poem',
			author:'BEAST',
			para1:[{
				line1:'I remember leaving my math book,',
				line2:'After the 10th boards examination',
				line3:'Never did  I know in future',
				line4:'I will still solving the disguised equations'
			}],
			para2:[{
				line1:'The thing  I realized about it was',
				line2:'The two types of problems',
				line3:'The one I had no solution for and I could always drop them',
			}],
			para3:[{
				line1:'But my struggle lied in the other one',
				line2:'Which literally made me cry',
				line3:'Where I know that I could reach the',
				line4:'But I couldn’t reach, I didn’t know',
			}],
			para4:[{
				line1:'Until today I was in an impression',
				line2:'Of leaving that torture behind',
				line3:'Little did I know I had been dealing',
				line4:'Those problems as equations of my life',
			}],
			para5:[{
				line1:'That person can leave you , cheat on you',
				line2:'And talented one’s even unlove,',
				line3:'The only solution you have is to drop',
				line4:'These are the problems type one',
				line5:'But the tussle lies where you get no leaving , no cheating, but love and even ‘ I do’',
				line5:'Where you have everything but less than the suffering',
				line5:'And this makes your problems type two.',
			}],
			para6:[{
				line1:'From the time the magic you felt,',
				line2:'Couldn’t be expressed in words,',
				line3:'To the moment you are so shattered',
				line4:'You just feel it in the diary, no extra effort.',
			}],
			para7:[{
				line1:'It begins when the difference between the two,',
				line2:'Gains more importance than the love,',
				line3:'When fights over petty issue and',
				line4:'The blame game rises enough',
			}],
			para8:[{
				line1:'You as a woman who are  ‘conditioned ‘ to care',
				line2:'Will loose your brain to emotions',
				line3:'And quarrel  demands your patience',
				line4:'Slowly turning it to a toxic potion.',
			}],
			para9:[{
				line1:'What is it that keeps you with them?',
				line2:'Emotional dependency? Physical  needs?',
				line3:'Or maybe an illusion they set by ',
				line4:'Dropping one tear in return of the eye that bleeds',
			}],
			para10:[{
				line1:'He is finding your flaws',
				line2:'You are facing his faults,',
				line3:'You call him a monster but',
				line4:'You suffer his assaults.',
			}],
			para11:[{
				line1:'Is it really all one sided?',
				line2:'As you’ve seen him in guilt.',
				line3:'You’ve heard all his ordeals',
				line4:'The reasons which makes him like this',
			}],
			para12:[{
				line1:'Now ,this gives you another justification',
				line2:'To stay with him and helps him cope',
				line3:'You think your love will make a difference',
				line4:'Yet clinging to another false hope.',
			}],
			para13:[{
				line1:'Or maybe not , as that might have helped,',
				line2:'But one more day of another mental stress,',
				line3:'The paining brain turns into bleeding veins.',
				line4:'Your depressed way to let out emotion suppressed.',
			}],
			para14:[{
				line1:'Making out gives you a desired belief ,',
				line2:'That our kiss still holds the vibe',
				line3:'And we still love each other',
				line4:'No matter how much we fight.',
			}],
			para15:[{
				line1:'He knows the problems lie within',
				line2:'And it is not all your mistake',
				line3:'He tries to be your man,',
				line4:'And give you the reasons to stay.',
			}],
			para16:[{
				line1:'This is what makes It so complicated',
				line2:'But then both want the other to smile,',
				line3:'Hiding emotions that are to be expressed',
				line4:'Then speaking the words that makes each other cry.',
			}],
			para17:[{
				line1:'He compliments your kohl',
				line2:'Then drain it away',
				line3:'You promise him cures',
				line4:'But give up in midways',
			}],
			para18:[{
				line1:'You wear  your relationship',
				line2:'Like roses behind your ear',
				line3:'You hide the bruise from  the thorns',
				line4:'Under the fabric that’s sheer',
			}],
		}]
		return(
			<Grid container columns={4}>
				<BlogOut blog={blog1} />
			</Grid>
		);
	}
}