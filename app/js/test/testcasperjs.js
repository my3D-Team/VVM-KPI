casper.test.begin('Test KPI', 1, function suite(test) {
        casper.start('http://localhost:63342/VVM-KPI/app/index.html'); casper.then(function() {
            this.echo(this.getHTML('div#content'));
        });
        casper.run(function() {
            test.assertExists('div#content');
            test.done();
        });
    }
);