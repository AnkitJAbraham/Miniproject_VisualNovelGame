label level2:
    hide portia
    hide nerissa
    scene bg portia_house_belmont_day
    "Portia and Nerissa are interrupted by trupets "
    "The Prince of Morocco, a dark-skinned African dressed in white, and
    three or four followers enter portia's house to take part in the lottery"

    show moroccan_prince at Position(xpos=0.2,xanchor=0.2,ypos=0.1,yanchor=0.1) with moveinleft:
        yoffset 100

    moroccan_prince "My lady,I have come all the way from morocco to take part in the trial"
    moroccan_prince "I beseech you not to judge me based on my skin's shadowy
    hue, a result of the African sun. Brave men have been intimidated by it,
    but esteemed beauties of my land love me. I treasure my dark skin,
    except for desiring your kind opinion of me."

    show portia_inverted at Position(xpos=0.9,xanchor=0.9,ypos=0.1,yanchor=0.1) with moveinright:
        yoffset 100

    portia "When it comes to selecting a husband, I value qualities beyond mere
    appearance."
    portia "Moreover, my fate is determined by a lottery, depriving
    me of the ability to choose for myself."
    portia "However, if my father hadn't denied me that right, you, esteemed Prince, would be considered as
    worthy a husband in my eyes as anyone else."

    moroccan_prince "Dear Portia, your words are a testament to your wisdom and beauty that transcends mere appearances. 
    I am deeply honored by your kind sentiments."

    moroccan_prince"It is true that the lottery places both of us in a position where our fates are determined by chance rather than choice. 
    However, your recognition of my worth as a potential husband fills my heart with joy and admiration."

    moroccan_prince "Now, may I request your assistance in leading me to the caskets, as I wish to test
    my luck. With this sword, I have achieved victories over Persia's leader
    and a prince, as well as conquered Sultan Solyman in three battles."

    
    moroccan_prince"Yet, there remains a fear that blind luck could allow a less deserving
    man to win your hand, causing me immense grief."

    portia "You must try your luck. Either don't attempt it at all, or promise before
    you choose a casket that if you choose the wrong one you will never
    speak to a lady about marriage again. Be warned."

    moroccan_prince "I promise. Come on, bring me to the caskets."

    
    scene bg pure_black

    "Portia accompanies the Moroccan prince to the temple where the caskets are located."

    scene bg caskets

    "The servant opens a curtain revealing three caskets: a gold one, a silver
    one, and a lead one"

    portia "Now choose one of the caskets."

    portia "To determine the correct casket, consider their inscriptions: The
    golden one offers what many desire, the silver one grants what is
    deserved, and the lead one demands sacrifice and risk. Trust your
    judgment and intuition to uncover the right choice."

    portia "One of them has my picture inside, Prince. If you choose that one then
    I am yours"

    call screen caskets

label gold_morocco:
    "The prince chooses the Golden casket"

    show moroccan_prince at Position(xpos=0.2,xanchor=0.2,ypos=0.1,yanchor=0.1) with moveinleft:
        yoffset 100

    moroccan_prince "May a divine presence guide me in this momentous choice! Could her
    heavenly picture be in the plain lead casket? Unthinkable. Her beauty
    deserves better. What about the silver casket? No, she deserves
    nothing less than gold. Give me the key. I choose this one, hoping for
    boundless joy!"

    show portia_inverted at Position(xpos=0.9,xanchor=0.9,ypos=0.1,yanchor=0.1) with moveinright:
        yoffset 100

    portia "There, take it, Prince. And if my picture is within, then I am yours."

    hide portia_inverted
    hide moroccan_prince

    "In the prince's dismay, he uncovers a skull containing a scroll within its eye socket.
    The words inscribed upon it read: \"All that glitters is
    not gold. Many have sacrificed their lives merely to admire superficial
    appearances. Golden tombs hold nothing but decay.\""

    
    show moroccan_prince at Position(xpos=0.2,xanchor=0.2,ypos=0.1,yanchor=0.1) with moveinleft:
        yoffset 100

    moroccan_prince " What...? This cannot be. Instead of the riches I anticipated, I find a stark reminder, a solemn lesson etched within these bones."
    moroccan_prince "\"All that glitters is not gold.\" How profound! 
    I realize now that appearances can deceive, and pursuing mere superficial beauty can lead to tragedy and emptiness. Golden tombs, filled with decay... It is a sobering revelation."

    moroccan_prince "Regrettably, my
    choice of casket has led to failure in pursuing Portia. Farewell,
    passion, and hello to a desolate solitude. Goodbye, Portia. My heart is
    heavy with sorrow, prompting a swift departure. This is how losers bid
    their farewells."

    hide moroccan_prince
    "The Prince of Morocco and his attendants exit"

    jump aragon

label silver_morocco:
    "The prince chooses the Silver casket"

    show moroccan_prince at Position(xpos=0.2,xanchor=0.2,ypos=0.1,yanchor=0.1) with moveinleft:
        yoffset 100

    moroccan_prince "The silver casket, a symbol of dignity and grace. Surely, within this choice lies the reward that matches my worth. 
    Let us unveil the truth that awaits me."

    "The prince opens the casket and sees the portrait of an idiot holding a message that reads 
    \"He who chooses me will get as much as he deserves.\""

    moroccan_prince "\"He who chooses me will get as much as he deserves.\" It appears I have been judged by my own actions.
    This foolish portrayal serves as a stark reminder that one's choices dictate their outcomes. Have I not considered my worth or the consequences of my decisions?"

    moroccan_prince "This outcome forces me to reflect upon the true measure of worthiness.
    Material possessions and external appearances hold little value compared to one's character and integrity. It is a humbling lesson to learn."

    moroccan_prince "Regrettably, my
    choice of casket has led to failure in pursuing Portia. Farewell,
    passion, and hello to a desolate solitude. Goodbye, Portia. My heart is
    heavy with sorrow, prompting a swift departure. This is how losers bid
    their farewells."

    hide moroccan_prince
    "The Prince of Morocco and his attendants exit"

    jump aragon


label lead_morocco:
    "The prince chooses the Lead casket"

    show moroccan_prince at Position(xpos=0.2,xanchor=0.2,ypos=0.1,yanchor=0.1) with moveinleft:
        yoffset 100

    moroccan_prince "The humble lead casket, often overlooked in favor of its more opulent counterparts. 
    Yet, there is an allure to its unassuming presence, as if it holds a hidden treasure of its own. Let me unlock its secrets."

    "The moroccan prince opens the casket to find a portrait of Portia"

    moroccan_prince "Portia, your portrait reveals a soul that surpasses material wealth. 
    In choosing the lead casket, fate has granted me the most precious treasure—your image, the gateway to your heart."

    moroccan_prince "I am filled with gratitude for this serendipitous outcome. 
    I vow to cherish this portrait and honor the opportunity it has bestowed upon me.
    With humility and devotion, I shall pursue a connection with Portia that transcends the superficial trappings of gold and silver."

    scene bg pure_black

    "Portia proceeds to marry the Moroccan prince"

    scene bg game_over

    "Game over"


label aragon:

    scene bg portia_house_belmont_day

    show portia at Position(xpos=0.2,xanchor=0.2,ypos=0.1,yanchor=0.1) with moveinleft:
        yoffset 100

    portia "Good riddance. Close the curtains back up. I hope everyone of his
    complexion will choose that cask."

    "Nerissa and a servant enter."

    show nerissa at Position(xpos=0.9,xanchor=0.9,ypos=0.1,yanchor=0.1) with moveinright:
        yoffset 100

    nerissa "Hurry, hurry, please. Close up the curtain right now. The Prince of
    Aragon has sworn his oath and now comes to make his selection."

    scene bg pure_black
    "Trumpets play. The Prince of Arragon and his attendants enter"

    
