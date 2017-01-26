go through all rules and make sure they are considered and understood

# Rules to consider later
id-match: off # we need to come back to this later if needed.

make one test dir per config file with a relevant eslintrc in its root.
group the rules in a logical manner together
run it through some of my own code bases
see how it behaves with other popular internal projects like SMP, etc
run it thgough some popular open source projects
* Maybe install them as optional dev dependencies and force eslint to run through them
write test cases that should pass (snippets from popular projects)
 * node code can use console while browser can use alarm
 * wrote tests for jsdocs. ideally run it through a production code that has valid jsdocs (find one)
OPTIONAL : write test cases for negative tests (things we don't allow)
