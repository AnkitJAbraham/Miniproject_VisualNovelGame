define antonio = Character(_("Antonio"), color="#c8c8ff")
define bassanio = Character(_("Bassanio"), color="#c8ffc8")

define shylock = Character(_("Shylock"), color="#c8c8ff")
define shylock_guard = Character(_("Guard"), color="#2500ca")

define valentino = Character(_("Valentino"), color="#cb150f")

define nerissa = Character(_("Nerissa"), color="#8646ac")
define portia = Character(_("Portia"), color="#a3297b")

define moroccan_prince= Character(_("Prince of Morocco"), color="#b16610a4")


label start:
    $ _skipping=False
    $wallet= 2000
    scene bg streets_of_venice
    menu:
        "level 1":
            jump level1
        "level 2":
            jump level2
        "level 3":
            pass
        "level 4":
            pass
    
    return

