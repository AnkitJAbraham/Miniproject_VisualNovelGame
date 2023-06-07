define antonio = Character(_("Antonio"), color="#c8c8ff")
define bassanio = Character(_("Bassanio"), color="#c8ffc8")
define shylock = Character(_("Shylock"), color="#c8c8ff")


label start:
    scene bg streets_of_venice
    play music "audio/bustling_city."

    "The bustling city of Venice is alive with merchants, sailors, and locals going about their daily business. ANTONIO, a wealthy merchant, and his friend BASSANIO stroll through the streets."

    show antonio at left
    show bassanio at right
    with dissolve

    antonio "Bassanio, my friend, what troubles your mind today?"
    bassanio "Antonio, I find myself in a predicament. I am deeply in debt and seek a loan to woo the beautiful Portia. I plan to travel to Belmont for a chance to win her hand."
    antonio "My dear friend, I am at your service. Although my own fortunes are tied up in my merchant ships, I will help you. We shall visit SHYLOCK, a Jewish moneylender, to secure the loan."

    stop music
    play music "audio/hopeful_music."

    scene bg shylocks_office_day
    show shylock at center with fadeIn
    with dissolve

    shylock "What brings you to my doorstep, Antonio? Your ventures are notorious for their risks."

    show antonio at left
    show bassanio at right

    antonio "I seek a loan, Shylock. I will provide you a pound of my flesh as collateral, and if I fail to repay, you may take it."
    shylock "Very well, Antonio. We shall draw up the bond. But beware, if you default, the bond shall be enforced."

    return
