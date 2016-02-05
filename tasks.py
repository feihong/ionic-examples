import os
import os.path as op
from invoke import run, task
from pathlib2 import Path, PurePath


TITLE = 'Ionic 1 Examples'
HERE = Path(__file__).parent
build_dir = HERE / 'build'


@task
def serve():
    import SimpleHTTPServer
    if not build_dir.exists():
        print 'No build directory. First run `invoke build`.'
        return
    run('cd %s && python -m SimpleHTTPServer' % build_dir)


@task
def build():
    import string

    www_dirs = []
    clean()

    if not build_dir.exists():
        build_dir.mkdir()

    for item in HERE.iterdir():
        if item.is_dir():
            www_dir = item / 'www'
            if not item.name.startswith('.') and www_dir.is_dir():
                www_dirs.append(item.name)
                src = item / 'www'
                dest = build_dir / item.name
                print 'Copying %s to %s' % (src, dest)
                run('cp -r %s %s' % (src, dest))

    with (build_dir / 'index.html').open('w') as fp:
        body = u''
        for www_dir in www_dirs:
            body += '  <li><a href="%s">%s</a></li>\n' % (www_dir, www_dir)

        tmpl = string.Template(INDEX_PAGE_TEMPLATE)
        fp.write(tmpl.substitute(title=TITLE, body=body))


@task
def clean():
    if build_dir.exists():
        run('rm -rf %s/*' % build_dir)


@task
def publish():
    build()
    run('ghp-import -n -p %s' % build_dir)


INDEX_PAGE_TEMPLATE = """\
<!doctype html>
<html class="no-js" lang="">
<head>
<meta charset="utf-8">
<meta http-equiv="x-ua-compatible" content="ie=edge">
<title>${title}</title>
<meta name="viewport" content="width=device-width, initial-scale=1">
</head>
<body>
<h1>${title}</h1>

<ul>
${body}
</ul>
</body>
</html>"""
